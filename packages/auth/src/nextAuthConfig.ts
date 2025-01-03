import type { DefaultSession, NextAuthConfig } from "next-auth";

import type { AuthUser } from "./types";
import spotifyProfile, { refreshAccessToken } from "./spotifyProfile";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: AuthUser & DefaultSession["user"];
    expires: string;
    error?: string;
  }
}

interface SessionToken {
  name: string;
  email: string;
  picture: string;
  sub: string;
  access_token: string;
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  scope: string;
  id: string;
  iat: number;
  exp: number;
  jti: string;
  error?: string;
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
const nextAuthConfig: NextAuthConfig = {
  providers: [spotifyProfile],
  session: {
    maxAge: 60 * 60, // 1hr
  },
  callbacks: {
    async jwt({ token, account }) {
      if (!account) {
        return token;
      }

      const updatedToken = {
        ...token,
        access_token: account?.access_token,
        token_type: account?.token_type,
        expires_at: account?.expires_at ?? Date.now() / 1000,
        expires_in: (account?.expires_at ?? 0) - Date.now() / 1000,
        refresh_token: account?.refresh_token,
        scope: account?.scope,
        id: account?.providerAccountId,
      };

      if (Date.now() < updatedToken.expires_at) {
        return refreshAccessToken(updatedToken);
      }

      return updatedToken;
    },
    session({ session, token }) {
      const sessionToken = token as unknown as SessionToken;

      const user: AuthUser = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        access_token: sessionToken.access_token,
        token_type: sessionToken.token_type,
        expires_at: sessionToken.expires_at,
        expires_in: sessionToken.expires_in,
        refresh_token: sessionToken.refresh_token,
        scope: sessionToken.scope,
        id: sessionToken.id,
        emailVerified: null,
      };

      session.user = user;
      session.error = sessionToken.error;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  theme: { colorScheme: "dark" },
};

export default nextAuthConfig;
