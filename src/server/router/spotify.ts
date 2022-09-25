import { createProtectedRouter } from './context'
import { z } from 'zod'
import { initializeSpotifyApi } from '../../utils/initializeSpotifyApi'

const timeRangeSchema = z.enum(['long_term', 'medium_term', 'short_term'])

export const spotifyRouter = createProtectedRouter()
  .query('getSession', {
    resolve({ ctx }) {
      return ctx.session
    },
  })
  .query('getUserTopArtists', {
    input: z.object({
      timeRange: timeRangeSchema,
      limit: z.number(),
    }),
    async resolve({ ctx, input }) {
      const spotifyApi = await initializeSpotifyApi(
        ctx.session.accessToken,
        ctx.session.refreshToken
      )
      const { timeRange: time_range, limit } = input

      const response = await spotifyApi.getMyTopArtists({ time_range, limit })
      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response.body
    },
  })
  .query('getUserTopTracks', {
    input: z.object({
      timeRange: timeRangeSchema,
      limit: z.number(),
    }),
    async resolve({ ctx, input }) {
      const spotifyApi = await initializeSpotifyApi(
        ctx.session.accessToken,
        ctx.session.refreshToken
      )
      const { timeRange: time_range, limit } = input

      const response = await spotifyApi.getMyTopTracks({ time_range, limit })
      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response.body
    },
  })
  .query('getUserRecentTracks', {
    input: z.object({
      limit: z.number(),
    }),
    async resolve({ ctx, input }) {
      const spotifyApi = await initializeSpotifyApi(
        ctx.session.accessToken,
        ctx.session.refreshToken
      )
      const { limit } = input

      const response = await spotifyApi.getMyRecentlyPlayedTracks({
        limit,
      })
      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response.body
    },
  })
  .query('getUserInfo', {
    async resolve({ ctx }) {
      const spotifyApi = await initializeSpotifyApi(
        ctx.session.accessToken,
        ctx.session.refreshToken
      )

      const response = await spotifyApi.getMe()
      if (response.statusCode !== 200) {
        throw new Error('Network response was not ok')
      }
      return response
    },
  })
