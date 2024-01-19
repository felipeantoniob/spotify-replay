import "../styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
