import type { MetaFunction } from "@remix-run/node";

import { ReplayLogo } from "@spotify-replay/ui/src/components/common/ReplayLogo/ReplayLogo";

import LogInButton from "~/components/LogInButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Spotify Replay" },
    {
      name: "description",
      content:
        "Personalized music dashboard that displays users' listening habits, including their top artists, songs, and genres.",
    },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-l from-on-primary-container from-5%  to-primary text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <ReplayLogo />
        <div className="text-center font-sans text-lg text-on-primary">
          <p>
            <span className="font-bold">Recap</span> songs
          </p>
          <p>
            <span className="font-bold">Recreate</span> playlists
          </p>
          <p>
            <span className="font-bold">Rediscover</span> yourself
          </p>
        </div>
        <LogInButton />
      </div>
    </main>
  );
}
