import { useRouter } from 'next/router'
import { useState } from 'react'
import { useBoundStore } from '../store/index'
import { timeRangeDescription } from '../utils/timeRangeDescription'
import { trpc } from '../utils/trpc'
import useModal from '../hooks/useModal'
import CreatedPlaylistModal from './CreatedPlaylistModal'
import { TimeRangeType } from './TimeRangeRadio'

const getFooterTitle = (pathname: string) => {
  switch (pathname) {
    case '/artists':
      return 'Create Top Artists playlist'
    case '/tracks':
      return 'Create Top Tracks playlist'
    case '/recent':
      return 'Create Recently Played playlist'
    default:
      return ''
  }
}

const getFooterDescription = (pathname: string) => {
  switch (pathname) {
    case '/artists':
      return 'This creates a playlist from your Top 20 artists with Top 5 tracks from each artist in random order.'
    case '/tracks':
      return 'This creates a playlist of your top 50 tracks.'
    case '/recent':
      return 'This creates a playlist of your 50 most recently played tracks.'
    default:
      return ''
  }
}

const getPlaylistName = (pathname: string, timeRange: TimeRangeType) => {
  switch (pathname) {
    case '/artists':
      return `Top 20 Artists ${timeRangeDescription(timeRange)}`
    case '/tracks':
      return `Top Tracks ${timeRangeDescription(timeRange)}`
    case '/recent':
      return 'Recently Played Tracks'
    default:
      return ''
  }
}

type CreatePlaylistFooterProps = {
  isVisibleOnScroll: boolean
}

const CreatePlaylistFooter = ({ isVisibleOnScroll }: CreatePlaylistFooterProps) => {
  const router = useRouter()
  const tracksUriArray = useBoundStore((state) => state.tracksUriArray)
  const timeRange = useBoundStore((state) => state.timeRange)
  const { isModalShowing, toggleModal } = useModal()

  const [playlistId, setPlaylistId] = useState('')

  const playlistQuery = trpc.useQuery(['spotify.getPlaylist', { playlistId }], {
    refetchOnWindowFocus: false,
    enabled: playlistId.length > 0,
  })
  const createPlaylist = trpc.useMutation('spotify.createPlaylist')
  const addTracksToPlaylist = trpc.useMutation('spotify.addTracksToPlaylist')

  let playlist: SpotifyApi.SinglePlaylistResponse = {} as SpotifyApi.SinglePlaylistResponse

  const handleCreatePlaylist = async (tracksUriArray: string[]) => {
    createPlaylist.mutate(
      { playlistName: getPlaylistName(router.pathname, timeRange) },
      {
        onSuccess: async (playlistId) => {
          setPlaylistId(playlistId)
          addTracksToPlaylist.mutate(
            { playlistId, tracksUriArray },
            {
              onSuccess: async () => {
                playlistQuery.refetch()
                toggleModal()
              },
            }
          )
        },
      }
    )
  }

  if (playlistQuery.isSuccess) {
    playlist = playlistQuery.data.body
  }

  return (
    <>
      <footer
        className={`footer footer-center translate-y-40  bg-[#121212] p-4 opacity-0 transition-all duration-500 lg:bottom-[48px] ${
          isVisibleOnScroll && 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex w-full flex-col justify-between px-4 md:flex-row">
          <div className="text-center text-gray-200 md:text-left">
            <h5 className="font-bold">{getFooterTitle(router.pathname)}</h5>
            <h6>{getFooterDescription(router.pathname)}</h6>
          </div>
          <button
            disabled={createPlaylist.isLoading}
            onClick={() => handleCreatePlaylist(tracksUriArray)}
            className="h-12 w-32 rounded-full bg-green-800 font-bold text-gray-200 transition-all hover:bg-green-700 disabled:bg-green-900"
          >
            {createPlaylist.isLoading ? 'Loading...' : 'Create Playlist'}
          </button>
        </div>
      </footer>
      {playlist.images?.length > 0 && (
        <CreatedPlaylistModal
          isVisible={isModalShowing}
          handleClose={toggleModal}
          playlistDetails={playlist}
        />
      )}
    </>
  )
}

export default CreatePlaylistFooter
