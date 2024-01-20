import "../styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";

import AuthSessionProvider from "../components/AuthSessionProvider";
import authOptions from "./api/auth/[...nextauth]/authOptions";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <AuthSessionProvider session={session}>
        <body className={`${inter.className} bg-primary`}>{children}</body>
      </AuthSessionProvider>
    </html>
  );
}
