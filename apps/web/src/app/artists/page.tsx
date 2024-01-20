"use client";

import { useBoundStore } from "@spotify-replay/store";
import { ArtistsGrid } from "@spotify-replay/storybook/src/components/artists/ArtistsGrid/ArtistsGrid";
import { Header } from "@spotify-replay/storybook/src/components/common/Header/Header";
import { SAMPLE_ARTISTS } from "@spotify-replay/storybook/src/constants/data";

import NavigationContainer from "../../components/NavigationContainer";

function Artists() {
  const limit = useBoundStore((state) => state.limit);
  const topArtists = SAMPLE_ARTISTS;
  const isLoading = false;

  return (
    <>
      <main className="pb-40 md:pl-20">
        <Header
          title="Your Top Artists"
          isTimeRangeButtonsGroupVisible={true}
          isTrackCountSelectorVisible={true}
        />
        <ArtistsGrid artists={topArtists} isLoading={isLoading} limit={limit} />
      </main>
      <NavigationContainer />
    </>
  );
}

export default Artists;
