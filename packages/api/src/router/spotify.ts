import type { MaxInt, Track } from "@spotify/web-api-ts-sdk";
import dayjs from "dayjs";
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
    .query(({ input: { text } }) => {
      return {
        greeting: `Hello ${text}`,
      };
    }),

  getUserTopArtists: protectedProcedure
    .input(
      z.object({
        timeRange: timeRangeSchema,
        limit: z.number(),
      }),
    )
    .query(async ({ input: { timeRange: time_range, limit } }) => {
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
    .query(async ({ input: { timeRange: time_range, limit } }) => {
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

  getGenreData: protectedProcedure
    .input(z.object({ timeRange: timeRangeSchema }))
    .query(async ({ input: { timeRange } }) => {
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

  getPlaylist: protectedProcedure
    .input(
      z.object({
        playlistId: z.string(),
      }),
    )
    .query(async ({ input: { playlistId } }) => {
      const response = await spotifySdk.playlists.getPlaylist(playlistId);

      return response;
    }),

  createPlaylist: protectedProcedure
    .input(
      z.object({
        playlistName: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { playlistName } = input;
      const userProfile = await spotifySdk.currentUser.profile();
      userProfile.id;
      const response = await spotifySdk.playlists.createPlaylist(
        userProfile.id,
        {
          name: `${playlistName} • ${dayjs().format("YYYY MMMM DD")}`,
          description: `Playlist created on ${dayjs().format("MMMM D, YYYY h:mm A")}`,
          public: false,
        },
      );

      return response.id;
    }),

  addTracksToPlaylist: protectedProcedure
    .input(
      z.object({
        playlistId: z.string(),
        tracksUriArray: z.string().array(),
      }),
    )
    .mutation(async ({ input: { playlistId, tracksUriArray } }) => {
      const response = await spotifySdk.playlists.addItemsToPlaylist(
        playlistId,
        tracksUriArray,
      );

      return response;
    }),

  getMultipleArtistsTopTracks: protectedProcedure
    .input(
      z.object({
        artistsIdArray: z.string().array(),
        artistsLimit: z.number(),
        tracksLimit: z.number(),
      }),
    )
    .query(async ({ input: { artistsIdArray, artistsLimit, tracksLimit } }) => {
      let topArtistTopTracks: Track[] = [];

      const filteredArtistsIdArray = artistsIdArray.slice(0, artistsLimit);

      for (const id of filteredArtistsIdArray) {
        const response = await spotifySdk.artists.topTracks(id, "US");

        const topTracks = response.tracks;

        const filteredTopTracks = topTracks.slice(0, tracksLimit);

        topArtistTopTracks = [...topArtistTopTracks, ...filteredTopTracks];
      }
      return topArtistTopTracks;
    }),
});
