import type { Track as TrackType } from "@spotify/web-api-ts-sdk";
import type { ReactNode } from "react";

import Track from "../Track/Track";
import TrackSkeleton from "../TrackSkeleton/TrackSkeleton";

interface TracksListProps {
  isLoading: boolean;
  limit: number;
  tracks: TrackType[];
}

const ListContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

const TracksList = ({ isLoading, limit, tracks }: TracksListProps) => {
  if (isLoading)
    return (
      <ListContainer>
        {[...new Array(limit).keys()].map((_, index) => (
          <TrackSkeleton key={index} showAlbum showDuration showIndex />
        ))}
      </ListContainer>
    );

  return (
    <ListContainer>
      {tracks.slice(0, limit).map((track, index) => (
        <Track
          key={track.id}
          index={index + 1}
          track={track}
          showIndex
          showAlbum
          showDuration
        />
      ))}
    </ListContainer>
  );
};

export default TracksList;
