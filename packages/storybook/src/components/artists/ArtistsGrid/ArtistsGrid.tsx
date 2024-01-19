import type { Artist } from "@spotify/web-api-ts-sdk";
import type { ReactNode } from "react";

import { Artist as ArtistComponent } from "../Artist/Artist";
import { ArtistSkeleton } from "../ArtistSkeleton/ArtistSkeleton";

const GridContainer = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {children}
  </div>
);

interface ArtistsGridProps {
  artists: Artist[];
  isLoading: boolean;
  limit: number;
}

const ArtistsGrid = ({ artists, isLoading, limit }: ArtistsGridProps) => {
  if (isLoading)
    return (
      <GridContainer>
        {[...new Array(limit).keys()].map((_, index) => (
          <ArtistSkeleton key={index} />
        ))}
      </GridContainer>
    );

  return (
    <GridContainer>
      {artists.slice(0, limit).map((artist) => (
        <ArtistComponent key={artist.id} artist={artist} />
      ))}
    </GridContainer>
  );
};

export { ArtistsGrid };
