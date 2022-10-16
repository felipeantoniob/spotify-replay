import create, { StateCreator } from 'zustand'

interface PlaybackSlice {
  uri: string
  setUri: (uri: string) => void
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
}
const createPlaybackSlice: StateCreator<PlaybackSlice & PlaylistSlice, [], [], PlaybackSlice> = (
  set
) => ({
  uri: '',
  setUri: (uri) => set({ uri }),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
})

interface PlaylistSlice {
  title: string
  description: string
  setTitle: (title: string) => void
  setDescription: (description: string) => void
}
const createPlaylistSlice: StateCreator<PlaybackSlice & PlaylistSlice, [], [], PlaylistSlice> = (
  set
) => ({
  title: '',
  description: '',
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
})

export const useBoundStore = create<PlaybackSlice & PlaylistSlice>()((...a) => ({
  ...createPlaybackSlice(...a),
  ...createPlaylistSlice(...a),
}))
