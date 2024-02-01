"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { MoreVertical } from "lucide-react";

import { useBoundStore } from "@spotify-replay/store";

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

const Content = () => (
  <SelectContent className="min-w-4">
    {TRACK_COUNT_OPTIONS.map((option, index) => (
      <SelectItem key={index} value={option.toString()}>
        {option}
      </SelectItem>
    ))}
  </SelectContent>
);

const TrackCountSelector = () => {
  const trackCount = useBoundStore((state) => state.limit);
  const setTrackCount = useBoundStore((state) => state.setLimit);

  function handleValueChange(value: TrackCountString) {
    setTrackCount(parseInt(value) as TrackCount);
  }

  return (
    <>
      <div className="xs:hidden block">
        <Select value={trackCount.toString()} onValueChange={handleValueChange}>
          <SelectPrimitive.Trigger>
            <MoreVertical width={24} height={24} color="white" />
          </SelectPrimitive.Trigger>
          <Content />
        </Select>
      </div>
      <div className="xs:block hidden">
        <Select value={trackCount.toString()} onValueChange={handleValueChange}>
          <SelectTrigger className="focus:ring-secondary w-[90px]">
            <SelectValue placeholder="Tracks" />
          </SelectTrigger>
          <Content />
        </Select>
      </div>
    </>
  );
};

export { TrackCountSelector };
