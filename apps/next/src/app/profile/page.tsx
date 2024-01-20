"use client";

import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";
import { ArtistsCarousel } from "@spotify-replay/ui/src/components/profile/ArtistsCarousel/ArtistsCarousel";
import { TracksCarousel } from "@spotify-replay/ui/src/components/profile/TracksCarousel/TracksCarousel";

import NavigationContainer from "../../components/NavigationContainer";
import { api } from "../../trpc/react";

const NUMBER_OF_CAROUSEL_ITEMS = 20;

function Profile() {
  const userInfo = api.spotify.getUserInfo.useQuery();
  const topTracks = api.spotify.getUserTopTracks.useQuery({
    timeRange: "short_term",
    limit: NUMBER_OF_CAROUSEL_ITEMS,
  });
  const topArtists = api.spotify.getUserTopArtists.useQuery({
    timeRange: "short_term",
    limit: NUMBER_OF_CAROUSEL_ITEMS,
  });

  return (
    <>
      <main className="pb-40 md:pl-20">
        <Header
          title={`Welcome to your replay, ${userInfo.data?.display_name}!`}
        />
        <TracksCarousel tracks={topTracks.data ?? []} useNextImage />
        <ArtistsCarousel artists={topArtists.data ?? []} useNextImage />
      </main>
      <NavigationContainer />
    </>
  );
}

export default Profile;
