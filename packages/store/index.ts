import type { StateCreator } from "zustand";
import { create } from "zustand";

interface PlaybackSlice {
  uri: string;
  setUri: (uri: string) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}
const createPlaybackSlice: StateCreator<
  PlaybackSlice,
  [],
  [],
  PlaybackSlice
> = (set) => ({
  uri: "",
  setUri: (uri) => set({ uri }),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
});

interface PlaylistSlice {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  tracksUriArray: string[];
  setTracksUriArray: (tracksUriArray: string[]) => void;
}
const createPlaylistSlice: StateCreator<
  PlaylistSlice,
  [],
  [],
  PlaylistSlice
> = (set) => ({
  title: "",
  description: "",
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  tracksUriArray: [],
  setTracksUriArray: (tracksUriArray) => set({ tracksUriArray }),
});

interface TimeRangeSlice {
  timeRange: "long_term" | "medium_term" | "short_term";
  setTimeRange: (timeRange: "long_term" | "medium_term" | "short_term") => void;
}

const createTimeRangeSlice: StateCreator<
  TimeRangeSlice,
  [],
  [],
  TimeRangeSlice
> = (set) => ({
  timeRange: "short_term",
  setTimeRange: (timeRange) => set({ timeRange }),
});

interface LimitSlice {
  limit: number;
  setLimit: (limit: number) => void;
}

const createLimitSlice: StateCreator<LimitSlice, [], [], LimitSlice> = (
  set,
) => ({
  limit: 50,
  setLimit: (limit) => set({ limit }),
});

export const useBoundStore = create<
  PlaybackSlice & PlaylistSlice & TimeRangeSlice & LimitSlice
>()((...a) => ({
  ...createPlaybackSlice(...a),
  ...createPlaylistSlice(...a),
  ...createTimeRangeSlice(...a),
  ...createLimitSlice(...a),
}));
