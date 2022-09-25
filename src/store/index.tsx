import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface PlaybackState {
  uri: string
  setUri: (uri: string) => void
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
}

export const useStore = create<PlaybackState>()(
  devtools(
    (set) => ({
      uri: '',
      setUri: (uri) => set({ uri }),
      isPlaying: false,
      setIsPlaying: (isPlaying) => set({ isPlaying }),
    }),
    {
      name: 'playback-storage',
    }
  )
)
