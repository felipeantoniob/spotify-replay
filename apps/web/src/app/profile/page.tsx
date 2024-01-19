import { Header } from "@spotify-replay/storybook/src/components/common/Header/Header";
import { ArtistsCarousel } from "@spotify-replay/storybook/src/components/profile/ArtistsCarousel/ArtistsCarousel";
import { TracksCarousel } from "@spotify-replay/storybook/src/components/profile/TracksCarousel/TracksCarousel";
import {
  SAMPLE_ARTISTS,
  SAMPLE_TRACKS,
} from "@spotify-replay/storybook/src/constants/data";

import NavigationContainer from "../../components/NavigationContainer";

function Profile() {
  const display_name = "felipeantonio";
  const topTracks = SAMPLE_TRACKS;
  const topArtists = SAMPLE_ARTISTS;

  return (
    <>
      <main className="pb-40 md:pl-20">
        <Header title={`Welcome to your replay, ${display_name}!`} />
        <TracksCarousel tracks={topTracks} />
        <ArtistsCarousel artists={topArtists} />
      </main>
      <NavigationContainer />
    </>
  );
}

export default Profile;
