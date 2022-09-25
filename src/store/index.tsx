import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface UriStoreState {
  uri: string
  setUri: (uri: string) => void
}

export const useUriStore = create<UriStoreState>()(
  devtools(
    (set) => ({
      uri: '',
      setUri: (uri) => set({ uri }),
    }),
    {
      name: 'uri-storage',
    }
  )
)
