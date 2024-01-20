"use client";

import type { Session } from "next-auth";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

function AuthSessionProvider({
  session,
  children,
}: {
  children: ReactNode;
  session: Session | null | undefined;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthSessionProvider;
