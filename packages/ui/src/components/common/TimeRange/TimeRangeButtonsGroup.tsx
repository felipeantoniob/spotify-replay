"use client";

import type { TimeRange } from "./types";
import { TimeRangeButton } from "../TimeRange/TimeRangeButton";
import { TIME_RANGE_OPTIONS } from "./constants";

interface TimeRangeButtonsGroupProps {
  setTimeRange: (timeRange: TimeRange) => void;
  selectedTimeRange: TimeRange;
}

const TimeRangeButtonsGroup = ({
  setTimeRange,
  selectedTimeRange,
}: TimeRangeButtonsGroupProps) => {
  return (
    <div className="flex gap-2">
      {TIME_RANGE_OPTIONS.map((option, index) => (
        <TimeRangeButton
          key={index}
          timeRangeOption={option}
          setTimeRange={setTimeRange}
          isSelected={option.value === selectedTimeRange}
        >
          {option.label}
        </TimeRangeButton>
      ))}
    </div>
  );
};

export { TimeRangeButtonsGroup, type TimeRange };
