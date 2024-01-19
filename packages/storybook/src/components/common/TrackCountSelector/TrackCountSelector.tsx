"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/Select/Select";

const TRACK_COUNT_OPTIONS = [10, 25, 50] as const;

type TrackCount = (typeof TRACK_COUNT_OPTIONS)[number];
type TrackCountString = `${TrackCount}`;

const TrackCountSelector = () => {
  const [trackCount, setTrackCount] = useState<TrackCount>(50);

  return (
    <Select
      value={trackCount.toString()}
      onValueChange={(value: TrackCountString) =>
        setTrackCount(parseInt(value) as TrackCount)
      }
    >
      <SelectTrigger className="w-[90px] focus:ring-secondary">
        <SelectValue placeholder="Tracks" />
      </SelectTrigger>
      <SelectContent className="min-w-4">
        {TRACK_COUNT_OPTIONS.map((option, index) => (
          <SelectItem key={index} value={option.toString()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { TrackCountSelector };
