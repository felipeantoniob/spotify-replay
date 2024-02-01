"use client";

import { Header } from "@spotify-replay/ui/src/components/common/Header/Header";
import { ArtistsCarousel } from "@spotify-replay/ui/src/components/profile/ArtistsCarousel/ArtistsCarousel";
import { ArtistsCarouselSkeleton } from "@spotify-replay/ui/src/components/profile/ArtistsCarouselSkeleton/ArtistsCarouselSkeleton";
import { TracksCarousel } from "@spotify-replay/ui/src/components/profile/TracksCarousel/TracksCarousel";
import { TracksCarouselSkeleton } from "@spotify-replay/ui/src/components/profile/TracksCarouselSkeleton/TracksCarouselSkeleton";

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
      <main className="pb-44 md:pl-20">
        <Header
          title={`Welcome to your replay${userInfo.data?.display_name ? `, ${userInfo.data.display_name}!` : ""}`}
        />
        {topTracks.data ? (
          <TracksCarousel tracks={topTracks.data ?? []} useNextImage />
        ) : (
          <TracksCarouselSkeleton />
        )}

        {topArtists.data ? (
          <ArtistsCarousel artists={topArtists.data ?? []} useNextImage />
        ) : (
          <ArtistsCarouselSkeleton />
        )}
      </main>
    </>
  );
}

export default Profile;
