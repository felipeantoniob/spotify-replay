import type { HTMLAttributes } from "react";

import { cn } from "../../../lib/utils";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-500 dark:bg-slate-800",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
