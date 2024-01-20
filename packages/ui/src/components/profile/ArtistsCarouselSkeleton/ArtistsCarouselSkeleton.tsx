"use client";

import { Skeleton } from "../../ui/Skeleton/Skeleton";

const ArtistsCarouselSkeleton = () => {
  return (
    <>
      <div className="mx-4 mt-16 flex flex-col gap-4">
        <h3 className="text-left font-bold text-white">
          Artists you come back to
        </h3>
        <div>
          <div className="-ml-4 flex">
            {[...Array(20).keys()].map((number) => (
              <div
                key={number}
                className=" flex min-w-0 shrink-0 grow-0 basis-full flex-col items-center pl-4 md:basis-1/5"
              >
                <Skeleton className="aspect-square w-full rounded-full bg-gray-500" />
                <Skeleton className=" mt-4 h-4 w-24 bg-gray-500 " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { ArtistsCarouselSkeleton };
