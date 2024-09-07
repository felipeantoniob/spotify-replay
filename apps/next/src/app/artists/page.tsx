"use client";

import { useEffect } from "react";

import { useBoundStore } from "@spotify-replay/store";
import { ArtistsGrid } from "@spotify-replay/ui/src/components/artists/ArtistsGrid/ArtistsGrid";
import Header from "@spotify-replay/ui/src/components/common/Header/Header";

import { api } from "../../trpc/react";

function Artists() {
  const timeRange = useBoundStore.use.timeRange();
  const setTracksUriArray = useBoundStore.use.setTracksUriArray();
  const limit = useBoundStore.use.limit();
  const topArtists = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit },
    { refetchOnWindowFocus: false },
  );
  const topArtistsTopTracks = api.spotify.getMultipleArtistsTopTracks.useQuery(
    {
      artistsIdArray: topArtists.data?.map((artist) => artist.id) ?? [""],
      artistsLimit: 20,
      tracksLimit: 5,
    },
    { enabled: !!topArtists.data },
  );

  useEffect(() => {
    if (topArtistsTopTracks.isSuccess) {
      setTracksUriArray(topArtistsTopTracks.data.map((track) => track.uri));
    }
  }, [
    setTracksUriArray,
    topArtistsTopTracks.data,
    topArtistsTopTracks.isSuccess,
  ]);

  return (
    <>
      <main className="mx-auto max-w-7xl pb-44 md:pl-20">
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
    </>
  );
}

export default Artists;
