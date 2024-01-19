import type { Artist as ArtistObject } from "@spotify/web-api-ts-sdk";
import type { ImageProps } from "next/image";
import type { HTMLProps } from "react";
import Image from "next/image";

interface ArtistProps {
  artist: ArtistObject;
  useNextImage?: boolean;
}

const Artist = ({ artist, useNextImage = false }: ArtistProps) => {
  const defaultProps: HTMLProps<HTMLImageElement> | ImageProps = {
    alt: artist.name,
    draggable: false,
    width: 192,
    height: 192,
    className:
      "h-32 w-32 rounded-full object-cover transition-all sm:h-48 sm:w-48",
  };

  return (
    <>
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        {useNextImage ? (
          <Image
            {...(defaultProps as ImageProps)}
            src={artist.images[0]?.url ?? ""}
          />
        ) : (
          <img {...defaultProps} src={artist.images[0]?.url ?? ""} />
        )}

        <h3 className="text-md font-medium text-white">{artist.name}</h3>
      </div>
    </>
  );
};

export { Artist };
