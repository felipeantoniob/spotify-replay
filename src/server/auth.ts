import { PrismaAdapter } from '@next-auth/prisma-adapter'
import type { GetServerSidePropsContext } from 'next'
import {
  getServerSession,
  type Session,
  type DefaultSession,
  type NextAuthOptions,
} from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { env } from '../env/server.mjs'
import { prisma } from './db'

interface SessionWithTokens extends Session {
  accessToken: string
  refreshToken: string
}

const SCOPES = [
  // "ugc-image-upload",
  'user-read-playback-state',
  'user-modify-playback-state',
  // "user-read-currently-playing",
  'streaming',
  // "app-remote-control",
  'user-read-email',
  'user-read-private',
  // "playlist-read-collaborative",
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  // "user-read-playback-position",
  'user-read-recently-played',
  'user-follow-read',
  // "user-follow-modify",
]

const SPOTIFY_AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?scope=${SCOPES.join(
  '%20'
)}`

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id: string
    } & DefaultSession['user']
    accessToken: string
    refreshToken: string
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks,
 * etc.
 *
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      return session as SessionWithTokens
    },
    jwt({ account, token }) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    SpotifyProvider({
      clientId: String(env.SPOTIFY_CLIENT_ID),
      clientSecret: String(env.SPOTIFY_CLIENT_SECRET),
      authorization: SPOTIFY_AUTHORIZATION_URL,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 30, // 30 minutes
  },
  jwt: {
    maxAge: 60 * 30, // 30 minutes
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: false, // Logs oauth callback response to console
  theme: {
    colorScheme: 'dark',
    // brandColor: '', // Hex color code
    // logo: '', // Absolute URL to image
  },
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
