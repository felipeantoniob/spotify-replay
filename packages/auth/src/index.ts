import NextAuth from "next-auth";

import nextAuthConfig from "./nextAuthConfig";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuthConfig);
