import "../styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cache } from "react";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

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

const getHeaders = cache(async () => headers());

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <TRPCReactProvider headersPromise={getHeaders()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
