import NextAuth, { type NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../server/db/client'
import { env } from '../../../env/server.mjs'

const scopes = [
  // "ugc-image-upload",
  // "user-read-playback-state",
  // "user-modify-playback-state",
  // "user-read-currently-playing",
  // "streaming",
  // "app-remote-control",
  'user-read-email',
  'user-read-private',
  // "playlist-read-collaborative",
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  // "user-library-modify",
  // "user-library-read",
  'user-top-read',
  // "user-read-playback-position",
  'user-read-recently-played',
  'user-follow-read',
  // "user-follow-modify",
]

const SPOTIFY_AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?scope=${scopes.join(
  '%20'
)}`

export const authOptions: NextAuthOptions = {
  debug: false, // Logs oauth callback response to console
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 30, // 30 minutes
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 30, // 30 minutes
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    SpotifyProvider({
      clientId: String(env.SPOTIFY_CLIENT_ID),
      clientSecret: String(env.SPOTIFY_CLIENT_SECRET),
      authorization: SPOTIFY_AUTHORIZATION_URL,
    }),
  ],
  callbacks: {
    async jwt({ account, token }) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.error = token.error
      return session
    },
  },
  theme: {
    colorScheme: 'dark',
    // brandColor: '', // Hex color code
    // logo: '', // Absolute URL to image
  },
}

export default NextAuth(authOptions)
