"use client";

import { useBoundStore } from "@spotify-replay/store";
import { ArtistsGrid } from "@spotify-replay/ui/src/components/artists/ArtistsGrid/ArtistsGrid";
import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";

import NavigationContainer from "../../components/NavigationContainer";
import { api } from "../../trpc/react";

function Artists() {
  const timeRange = useBoundStore((state) => state.timeRange);
  const limit = useBoundStore((state) => state.limit);
  const topArtists = api.spotify.getUserTopArtists.useQuery({
    timeRange,
    limit,
  });

  return (
    <>
      <main className="pb-40 md:pl-20">
        <Header
          title="Your Top Artists"
          isTimeRangeButtonsGroupVisible={true}
          isTrackCountSelectorVisible={true}
        />
        <ArtistsGrid
          artists={topArtists.data ?? []}
          isLoading={topArtists.isLoading || topArtists.isFetching}
          limit={limit}
          useNextImage
        />
      </main>
      <NavigationContainer />
    </>
  );
}

export default Artists;
