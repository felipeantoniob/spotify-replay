"use client";

import type { Artist } from "@spotify/web-api-ts-sdk";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/Carousel/Carousel";
import { Image } from "../../ui/Image/Image";

interface ArtistsCarouselProps {
  artists: Artist[];
  useNextImage?: boolean;
}

const ArtistsCarousel = ({
  artists,
  useNextImage = false,
}: ArtistsCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <>
      <div className="mx-4 mt-16 flex flex-col gap-4">
        <h3 className="text-left font-bold text-white">
          Artists you come back to
        </h3>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {artists.map((artist) => (
              <CarouselItem key={artist.id} className="basis-1/3 md:basis-1/5">
                <Image
                  useNextImage={useNextImage}
                  src={artist.images[0]?.url ?? ""}
                  alt={artist.name}
                  width={320}
                  height={320}
                  className="aspect-square rounded-full object-cover"
                />
                <p className="mt-2 truncate text-center text-sm font-bold text-white">
                  {artist.name}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export { ArtistsCarousel };
