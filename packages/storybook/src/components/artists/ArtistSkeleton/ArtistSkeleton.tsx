import { Skeleton } from "../../ui/Skeleton/Skeleton";

const ArtistSkeleton = () => {
  return (
    <div className="mb-12 flex max-w-sm flex-col items-center">
      <Skeleton className="h-32 w-32 rounded-full sm:h-48 sm:w-48" />
      <Skeleton className="mt-4 h-4 w-20 max-w-[80px] rounded-full" />
    </div>
  );
};

export { ArtistSkeleton };
