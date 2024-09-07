import type { PropsWithChildren } from "react";
import { forwardRef } from "react";

import type { TimeRange, TimeRangeOption } from "./types";
import { Badge } from "../../ui/Badge/Badge";
import { Button } from "../../ui/Button/Button";

interface TimeRangeButtonProps {
  timeRangeOption: TimeRangeOption;
  isSelected: boolean;
  setTimeRange: (timeRange: TimeRange) => void;
}

const TimeRangeButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<TimeRangeButtonProps>
>(({ timeRangeOption, isSelected, setTimeRange }, ref) => {
  return (
    <Button
      ref={ref}
      onClick={() => setTimeRange(timeRangeOption.value)}
      variant="ghost"
      className="h-[35px] rounded-full p-0 hover:bg-transparent hover:opacity-80"
    >
      <Badge variant={isSelected ? "secondary" : "outline"}>
        {timeRangeOption.label}
      </Badge>
    </Button>
  );
});

export { TimeRangeButton };
