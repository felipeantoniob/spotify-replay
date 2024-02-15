import type { Track as TrackType } from "@spotify/web-api-ts-sdk";
import { AudioLines, PlayIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useBoundStore } from "@spotify-replay/store";

import { Image } from "../../ui/Image/Image";

interface TrackProps {
  index: number;
  showIndex?: boolean;
  showDuration?: boolean;
  showAlbum?: boolean;
  track: TrackType;
  useNextImage?: boolean;
}

const Track = ({
  index,
  showAlbum,
  showDuration,
  showIndex,
  track,
  useNextImage,
}: TrackProps) => {
  const uri = useBoundStore.use.uri();
  const setUri = useBoundStore.use.setUri();
  const isPlaying = useBoundStore.use.isPlaying();
  const setIsPlaying = useBoundStore.use.setIsPlaying();

  const isTrackSelected = uri === track.id;

  function handlePlay() {
    setUri(track.id);
    setIsPlaying(true);
  }

  return (
    <div
      className={twMerge(
        "group flex flex-row rounded-md text-on-primary transition-all duration-75 hover:bg-on-primary-container/25",
        isTrackSelected &&
          "bg-on-primary-container hover:bg-on-primary-container",
      )}
    >
      {showIndex && (
        <button
          onClick={handlePlay}
          className="flex h-full w-10 cursor-pointer items-center justify-center self-center"
        >
          {isTrackSelected ? (
            <>
              {isPlaying ? (
                <AudioLines
                  fill="white"
                  stroke="white"
                  width={16}
                  height={16}
                />
              ) : (
                <PlayIcon fill="white" stroke="white" width={16} height={16} />
              )}
            </>
          ) : (
            <>
              <div className="text-sm group-hover:hidden">{index}</div>
              <PlayIcon
                fill="white"
                stroke="white"
                width={16}
                height={16}
                className="hidden group-hover:block"
              />
            </>
          )}
        </button>
      )}
      <div className="flex flex-1 flex-row overflow-hidden transition-all">
        <div className="flex shrink-0">
          <Image
            src={track.album.images[0]?.url ?? ""}
            useNextImage={useNextImage}
            alt="album cover"
            height={80}
            width={80}
          />

          <img src="" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1 truncate px-4">
          <div className="flex flex-row items-center">
            <h2 className="truncate text-left text-sm font-medium ">
              {track.name}
            </h2>
          </div>
          <div className="flex items-center truncate text-left">
            <h4 className="truncate text-sm font-medium">
              {track.artists.map((artist) => artist.name).join(", ")}
            </h4>
          </div>
        </div>
        {showAlbum && (
          <div className="hidden h-full flex-1 flex-col justify-center truncate text-sm md:flex">
            {track.album.name}
          </div>
        )}
        {showDuration && <div className="self-center px-4 text-sm">3:39</div>}
      </div>
    </div>
  );
};

export default Track;
