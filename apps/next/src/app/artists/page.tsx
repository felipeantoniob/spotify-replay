"use client";

import { useEffect } from "react";

import { useBoundStore } from "@spotify-replay/store";
import { ArtistsGrid } from "@spotify-replay/ui/src/components/artists/ArtistsGrid/ArtistsGrid";
import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";

import FloatingActionButtonContainer from "../../components/FloatingActionButtonContainer";
import NavigationContainer from "../../components/NavigationContainer";
import { api } from "../../trpc/react";

function Artists() {
  const timeRange = useBoundStore((state) => state.timeRange);
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray);
  const limit = useBoundStore((state) => state.limit);
  const topArtists = api.spotify.getUserTopArtists.useQuery({
    timeRange,
    limit,
  });
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
      <FloatingActionButtonContainer />
      <NavigationContainer />
    </>
  );
}

export default Artists;
