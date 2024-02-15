"use client";

import { useBoundStore } from "@spotify-replay/store";
import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";
import { GenrePieChart } from "@spotify-replay/ui/src/components/genres/GenrePieChart/GenrePieChart";

import { api } from "../../trpc/react";

function Genres() {
  const timeRange = useBoundStore.use.timeRange();
  const topArtists = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit: 50 },
    { refetchOnWindowFocus: false },
  );
  const genreData = api.spotify.getGenreData.useQuery({ timeRange });

  return (
    <>
      <main className="md:pl-20">
        <Header title="Your Top Genres" isTimeRangeButtonsGroupVisible />
        <div className="flex h-screen justify-center pb-16">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <GenrePieChart
              genreChartData={genreData.data ?? []}
              topArtists={topArtists.data ?? []}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Genres;
