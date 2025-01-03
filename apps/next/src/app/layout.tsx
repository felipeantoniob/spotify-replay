import "../styles/globals.css";

import type { Metadata } from "next";
import { cache } from "react";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { auth } from "@spotify-replay/auth";

import AuthSessionProvider from "../components/AuthSessionProvider";
import NavigationContainer from "../components/NavigationContainer";
import { TRPCReactProvider } from "../trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Spotify Replay",
  description:
    "Personalized music dashboard that displays users' listening habits, including their top artists, songs, and genres.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const getHeaders = cache(async () => await headers());

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <AuthSessionProvider session={session}>
          <TRPCReactProvider headersPromise={getHeaders()}>
            {children}
            <SpeedInsights />
            <NavigationContainer />
          </TRPCReactProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
