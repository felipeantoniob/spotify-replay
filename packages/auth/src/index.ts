import NextAuth from "next-auth";

import nextAuthConfig from "./nextAuthConfig";

export type { Session } from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuthConfig);
