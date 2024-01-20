"use client";

import type { Track } from "@spotify/web-api-ts-sdk";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/Carousel/Carousel";
import { Image } from "../../ui/Image/Image";

interface TracksCarouselProps {
  tracks: Track[];
  useNextImage?: boolean;
}

const TracksCarousel = ({
  tracks,
  useNextImage = false,
}: TracksCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <>
      <div className="mx-4 mt-16 flex flex-col gap-4">
        <h3 className="text-left font-bold text-white">
          You&apos;ve been loving these lately
        </h3>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {tracks.map((track) => (
              <CarouselItem key={track.id} className="basis-1/3 md:basis-1/5">
                <Image
                  useNextImage={useNextImage}
                  src={track?.album.images[0]?.url ?? ""}
                  alt={track.album.name}
                  width={320}
                  height={320}
                  className="aspect-square object-cover"
                />
                <p className="mt-2 truncate text-left text-sm font-bold text-white">
                  {track.name}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export { TracksCarousel };
