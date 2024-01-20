"use client";

import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";
import { TracksList } from "@spotify-replay/ui/src/components/tracks/TracksList/TracksList";
import { SAMPLE_TRACKS } from "@spotify-replay/ui/src/constants/data";

import NavigationContainer from "../../components/NavigationContainer";

function Tracks() {
  const topTracks = SAMPLE_TRACKS;
  const isLoading = false;
  const limit = 50;

  return (
    <>
      <main className="pb-40 md:pl-20">
        <Header
          title="Your Top Tracks"
          isTimeRangeButtonsGroupVisible={true}
          isTrackCountSelectorVisible={true}
        />
        <TracksList tracks={topTracks} isLoading={isLoading} limit={limit} />
      </main>
      <NavigationContainer />
    </>
  );
}

export default Tracks;
