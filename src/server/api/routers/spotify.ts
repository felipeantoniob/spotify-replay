import dayjs from 'dayjs'
import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, spotifyProcedure } from '../trpc'

const timeRangeSchema = z.enum(['long_term', 'medium_term', 'short_term'])

export const spotifyRouter = createTRPCRouter({
  hello: protectedProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    }
  }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),

  getSession: protectedProcedure.query(({ ctx }) => {
    return ctx.session
  }),

  getUserTopArtists: spotifyProcedure
    .input(
      z.object({
        timeRange: timeRangeSchema,
        limit: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { timeRange: time_range, limit } = input
      const response = await ctx.spotifyApi.getMyTopArtists({ time_range, limit })

      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response.body
    }),

  getUserTopTracks: spotifyProcedure
    .input(
      z.object({
        timeRange: timeRangeSchema,
        limit: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { timeRange: time_range, limit } = input
      const response = await ctx.spotifyApi.getMyTopTracks({ time_range, limit })

      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response.body
    }),

  getUserInfo: spotifyProcedure.query(async ({ ctx }) => {
    const response = await ctx.spotifyApi.getMe()

    if (response.statusCode !== 200) {
      throw new Error('Network response was not ok')
    }
    return response
  }),

  getPlaylist: spotifyProcedure
    .input(
      z.object({
        playlistId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { playlistId } = input
      const response = await ctx.spotifyApi.getPlaylist(playlistId)

      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response
    }),

  createPlaylist: spotifyProcedure
    .input(
      z.object({
        playlistName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { playlistName } = input
      const response = await ctx.spotifyApi.createPlaylist(
        `${playlistName} • ${dayjs().format('YYYY MMMM DD')}`,
        {
          description: `Playlist created on ${dayjs().format('MMMM D, YYYY h:mm A')}`,
          public: false,
        }
      )

      if (response.statusCode !== 201) {
        throw new Error('Network response was not ok')
      }
      return response.body.id
    }),

  addTracksToPlaylist: spotifyProcedure
    .input(
      z.object({
        playlistId: z.string(),
        tracksUriArray: z.string().array(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { playlistId, tracksUriArray } = input

      const response = await ctx.spotifyApi.addTracksToPlaylist(playlistId, tracksUriArray)
      if (response.statusCode !== 201) {
        throw new Error('Network response was not ok')
      }
      return
    }),

  getMultipleArtistsTopTracks: spotifyProcedure
    .input(
      z.object({
        artistsIdArray: z.string().array(),
        artistsLimit: z.number(),
        tracksLimit: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { artistsIdArray, artistsLimit, tracksLimit } = input

      let topArtistTopTracks: SpotifyApi.TrackObjectFull[] = []

      const filteredArtistsIdArray = artistsIdArray.slice(0, artistsLimit)

      for (const id of filteredArtistsIdArray) {
        const response = await ctx.spotifyApi.getArtistTopTracks(id, 'US')

        if (response.statusCode !== 200) {
          throw new Error('Network response was not ok')
        }

        const topTracks = response.body.tracks

        const filteredTopTracks = topTracks.slice(0, tracksLimit)

        topArtistTopTracks = [...topArtistTopTracks, ...filteredTopTracks]
      }
      return topArtistTopTracks
    }),
})
