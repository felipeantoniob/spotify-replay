import React, { useState } from 'react'
import { trpc } from '../utils/trpc'
import { useBoundStore } from '../store/index'
import { timeRangeDescription } from '../utils/timeRangeDescription'

type CreatePlaylistFooterProps = {
  isVisibleOnScroll: boolean
  title: string
  description: string
}

const CreatePlaylistFooter = ({
  isVisibleOnScroll,
  title,
  description,
}: CreatePlaylistFooterProps) => {
  const tracksUriArray = useBoundStore((state) => state.tracksUriArray)
  const timeRange = useBoundStore((state) => state.timeRange)

  const [playlistId, setPlaylistId] = useState('')

  const playlistQuery = trpc.useQuery(['spotify.getPlaylist', { playlistId }], {
    refetchOnWindowFocus: false,
    enabled: !!playlistId,
  })
  const createPlaylist = trpc.useMutation('spotify.createPlaylist')
  const addTracksToPlaylist = trpc.useMutation('spotify.addTracksToPlaylist')

  const handleCreatePlaylist = async (tracksUriArray: string[]) => {
    createPlaylist.mutate(
      { playlistName: `Top Tracks ${timeRangeDescription(timeRange)}` },
      {
        onSuccess: async (playlistId) => {
          setPlaylistId(playlistId)
          addTracksToPlaylist.mutate(
            { playlistId, tracksUriArray },
            {
              onSuccess: async () => {
                playlistQuery.refetch()
              },
            }
          )
        },
      }
    )
  }

  return (
    <footer
      className={`footer footer-center fixed bottom-[48px] left-0 right-0 translate-y-40 bg-[#121212] p-4 transition-all duration-500 lg:bottom-[48px] ${
        isVisibleOnScroll && 'translate-y-0'
      }`}
    >
      <div className="flex h-16 w-full justify-between px-4">
        <div className="text-left text-gray-200">
          <h5 className="font-bold">{title}</h5>
          <h6>{description}</h6>
        </div>
        <button
          onClick={() => handleCreatePlaylist(tracksUriArray)}
          className="rounded-full bg-green-800 px-4 py-3 font-bold text-gray-200 transition-all hover:bg-green-700"
        >
          Create Playlist
        </button>
      </div>
    </footer>
  )
}

export default CreatePlaylistFooter
