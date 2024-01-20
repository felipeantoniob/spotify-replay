import { Skeleton } from "../../ui/Skeleton/Skeleton";

interface TrackSkeletonProps {
  showIndex?: boolean;
  showDuration?: boolean;
  showAlbum?: boolean;
}

const TrackSkeleton = ({
  showAlbum,
  showDuration,
  showIndex,
}: TrackSkeletonProps) => {
  return (
    <div className="group flex flex-row rounded-md text-on-primary transition-all duration-75 hover:bg-on-primary-container/25">
      {showIndex && (
        <button className="flex h-full w-10 cursor-pointer items-center justify-center self-center ">
          <div className="text-sm group-hover:hidden">
            <Skeleton className="h-3 w-4" />
          </div>
        </button>
      )}
      <div className="flex flex-1 flex-row overflow-hidden transition-all">
        <div className="flex shrink-0">
          <Skeleton className="h-20 w-20 rounded-none" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1 truncate px-4">
          <div className="flex flex-row items-center">
            <Skeleton className="h-3 w-24 rounded-md" />
          </div>
          <div className="flex items-center truncate text-left">
            <Skeleton className="h-3 w-36 rounded-md" />
          </div>
        </div>
        {showAlbum && (
          <div className="hidden h-full flex-1 flex-col justify-center truncate text-sm md:flex">
            <Skeleton className="h-3 w-32 rounded-md" />
          </div>
        )}
        {showDuration && (
          <div className="self-center px-4 text-sm">
            <Skeleton className="h-3 w-8 rounded-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackSkeleton;
