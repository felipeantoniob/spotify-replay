import { useRouter } from 'next/router'
import { useState } from 'react'
import { useBoundStore } from '../store/index'
import { timeRangeDescription } from '../utils/timeRangeDescription'
import { trpc } from '../utils/trpc'
import useModal from '../hooks/useModal'
import CreatedPlaylistModal from './CreatedPlaylistModal'

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
  const router = useRouter()
  const { isModalShowing, toggleModal } = useModal()

  const [playlistId, setPlaylistId] = useState('')

  const playlistQuery = trpc.useQuery(['spotify.getPlaylist', { playlistId }], {
    refetchOnWindowFocus: false,
    enabled: !!playlistId,
  })
  const createPlaylist = trpc.useMutation('spotify.createPlaylist')
  const addTracksToPlaylist = trpc.useMutation('spotify.addTracksToPlaylist')

  let playlist: SpotifyApi.SinglePlaylistResponse = {} as SpotifyApi.SinglePlaylistResponse

  const handleCreatePlaylist = async (tracksUriArray: string[]) => {
    createPlaylist.mutate(
      { playlistName: getPlaylistName(router.pathname) },
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

  const getPlaylistName = (pathname: string) => {
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

  return (
    <>
      <footer
        className={`footer footer-center translate-y-40  bg-[#121212] p-4 opacity-0 transition-all duration-500 lg:bottom-[48px] ${
          isVisibleOnScroll && 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex w-full flex-col justify-between px-4 md:flex-row">
          <div className="text-center text-gray-200 md:text-left">
            <h5 className="font-bold">{title}</h5>
            <h6>{description}</h6>
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
          show={isModalShowing}
          handleClose={toggleModal}
          playlistDetails={playlist}
        />
      )}
    </>
  )
}

export default CreatePlaylistFooter
