"use client";

import { useBoundStore } from "@spotify-replay/store";
import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";
import { TracksList } from "@spotify-replay/ui/src/components/tracks/TracksList/TracksList";

import NavigationContainer from "../../components/NavigationContainer";
import { api } from "../../trpc/react";

function Tracks() {
  const timeRange = useBoundStore((state) => state.timeRange);
  const limit = useBoundStore((state) => state.limit);
  const topTracks = api.spotify.getUserTopTracks.useQuery({
    timeRange,
    limit,
  });

  return (
    <>
      <main className="pb-40 md:pl-20">
        <Header
          title="Your Top Tracks"
          isTimeRangeButtonsGroupVisible={true}
          isTrackCountSelectorVisible={true}
        />
        <TracksList
          tracks={topTracks.data ?? []}
          isLoading={topTracks.isLoading || topTracks.isFetching}
          limit={limit}
        />
      </main>
      <NavigationContainer />
    </>
  );
}

export default Tracks;
