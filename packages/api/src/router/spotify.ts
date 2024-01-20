import type { MaxInt } from "@spotify/web-api-ts-sdk";
import { z } from "zod";

import spotifySdk from "@spotify-replay/auth/sdk";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import getAllArtistsGenres from "../utils/getAllArtistsGenres";
import getGenreChartData from "../utils/getGenreChartData";
import getGenreFrequency from "../utils/getGenreFrequency";
import getTopGenres from "../utils/getTopGenres";

const timeRangeSchema = z.enum(["long_term", "medium_term", "short_term"]);

export const spotifyRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getUserTopArtists: protectedProcedure
    .input(
      z.object({
        timeRange: timeRangeSchema,
        limit: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { timeRange: time_range, limit } = input;
      const response = await spotifySdk.currentUser.topItems(
        "artists",
        time_range,
        limit as MaxInt<50>,
      );

      return response.items;
    }),

  getUserTopTracks: protectedProcedure
    .input(
      z.object({
        timeRange: timeRangeSchema,
        limit: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { timeRange: time_range, limit } = input;
      const response = await spotifySdk.currentUser.topItems(
        "tracks",
        time_range,
        limit as MaxInt<50>,
      );

      return response.items;
    }),

  getUserInfo: protectedProcedure.query(async () => {
    const response = await spotifySdk.currentUser.profile();

    return response;
  }),

  getPlaylist: protectedProcedure
    .input(
      z.object({
        playlistId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { playlistId } = input;
      const response = await spotifySdk.playlists.getPlaylist(playlistId);

      return response;
    }),

  getGenreData: protectedProcedure
    .input(z.object({ timeRange: timeRangeSchema }))
    .query(async ({ input }) => {
      const { timeRange } = input;
      const results = await spotifySdk.currentUser.topItems(
        "artists",
        timeRange,
        50,
      );

      const topArtists = results.items;
      const genresArray = getAllArtistsGenres(topArtists);
      const genreFrequencyArray = getGenreFrequency(genresArray);
      const topGenresArray = getTopGenres(genreFrequencyArray, 20);
      const genresArtistsObject = getGenreChartData(topGenresArray, topArtists);
      return genresArtistsObject;
    }),
});
