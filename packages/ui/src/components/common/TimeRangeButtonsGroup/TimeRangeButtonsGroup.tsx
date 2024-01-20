"use client";

import { useBoundStore } from "@spotify-replay/store";

import { TimeRangeButton } from "../TimeRangeButton/TimeRangeButton";

type TimeRange = "long_term" | "medium_term" | "short_term";

const TIME_RANGE_OPTIONS = [
  {
    label: "All Time",
    timeRange: "long_term",
  },
  {
    label: "6 Months",
    timeRange: "medium_term",
  },
  {
    label: "This Month",
    timeRange: "short_term",
  },
] as const;

const TimeRangeButtonsGroup = () => {
  const timeRange = useBoundStore((state) => state.timeRange);
  const setTimeRange = useBoundStore((state) => state.setTimeRange);

  return (
    <div className="flex gap-2">
      {TIME_RANGE_OPTIONS.map((option, index) => (
        <TimeRangeButton
          key={index}
          isSelected={timeRange === option.timeRange}
          onClick={() => setTimeRange(option.timeRange)}
        >
          {option.label}
        </TimeRangeButton>
      ))}
    </div>
  );
};

export { TimeRangeButtonsGroup, type TimeRange };
