"use client";

import { useEffect } from "react";

import { useBoundStore } from "@spotify-replay/store";
import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";
import { TracksList } from "@spotify-replay/ui/src/components/tracks/TracksList/TracksList";

import { api } from "../../trpc/react";

function Tracks() {
  const timeRange = useBoundStore((state) => state.timeRange);
  const limit = useBoundStore((state) => state.limit);
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray);
  const topTracks = api.spotify.getUserTopTracks.useQuery(
    { timeRange, limit },
    { refetchOnWindowFocus: false },
  );

  useEffect(() => {
    if (topTracks.isSuccess) {
      setTracksUriArray(topTracks.data.map((track) => track.uri));
    }
  }, [setTracksUriArray, topTracks.data, topTracks.isSuccess]);

  return (
    <>
      <main className="pb-44 md:pl-20">
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
    </>
  );
}

export default Tracks;
