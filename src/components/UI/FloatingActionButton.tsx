import { useRouter } from 'next/router'
import { useState } from 'react'

import useModal from '../../hooks/useModal'
import { useBoundStore } from '../../store'
import { api } from '../../utils/api'
import CreatedPlaylistModal from './CreatedPlaylistModal'
import { Icon } from './Icon'
import type { TimeRangeType } from './TimeRangeButtons'

const getTimeRangeDescription = (timeRange: TimeRangeType) => {
  switch (timeRange) {
    case 'long_term':
      return '(All Time)'
    case 'medium_term':
      return '(Last 6 Months)'
    case 'short_term':
      return '(Last Month)'
    default:
      return ''
  }
}

const getPlaylistName = (pathname: string, timeRange: TimeRangeType) => {
  switch (pathname) {
    case '/artists':
      return `Top 20 Artists ${getTimeRangeDescription(timeRange)}`
    case '/tracks':
      return `Top Tracks ${getTimeRangeDescription(timeRange)}`
    case '/recent':
      return 'Recently Played Tracks'
    default:
      return ''
  }
}

const getButtonText = (pathname: string) => {
  switch (pathname) {
    case '/artists':
      return 'Create a playlist of your top artists?'
    case '/tracks':
      return 'Create a playlist of your top tracks?'
    default:
      return ''
  }
}

const FloatingActionButton = () => {
  const router = useRouter()
  const tracksUriArray = useBoundStore((state) => state.tracksUriArray)
  const timeRange = useBoundStore((state) => state.timeRange)
  const { isModalShowing, toggleModal } = useModal()
  const [isButtonExpanded, setIsButtonExpanded] = useState(false)
  const [playlistId, setPlaylistId] = useState('')
  const playlistQuery = api.spotify.getPlaylist.useQuery(
    { playlistId },
    { refetchOnWindowFocus: false, enabled: playlistId.length > 0 }
  )
  const createPlaylist = api.spotify.createPlaylist.useMutation()
  const addTracksToPlaylist = api.spotify.addTracksToPlaylist.useMutation()

  let playlist: SpotifyApi.SinglePlaylistResponse = {} as SpotifyApi.SinglePlaylistResponse

  const handleCreatePlaylist = (tracksUriArray: string[]) => {
    if (tracksUriArray.length === 0) return

    createPlaylist.mutate(
      { playlistName: getPlaylistName(router.pathname, timeRange) },
      {
        onSuccess: (playlistId) => {
          setPlaylistId(playlistId)
          addTracksToPlaylist.mutate(
            { playlistId, tracksUriArray },
            {
              onSuccess: () => {
                void playlistQuery.refetch()
                toggleModal()
                setIsButtonExpanded(false)
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
      <div className="mx-auto mb-2 md:max-w-4xl">
        <div className="mx-2 ml-auto flex w-fit flex-row items-center gap-2 rounded-2xl bg-tertiary-container px-3 py-3 drop-shadow-xl transition">
          {isButtonExpanded && (
            <>
              <p className="w-40 px-1 text-left text-xs text-on-tertiary-container">
                {getButtonText(router.pathname)}
              </p>
              <div className="flex flex-row items-center">
                <button
                  onClick={() => handleCreatePlaylist(tracksUriArray)}
                  disabled={createPlaylist.isLoading}
                  className="p-2"
                >
                  <p className="text-sm font-bold text-on-tertiary-container">
                    {createPlaylist.isLoading ? 'Loading...' : 'Create'}
                  </p>
                </button>
                <button className="p-2" onClick={() => setIsButtonExpanded(false)}>
                  <Icon id="close" width="17" height="18" />
                </button>
              </div>
            </>
          )}
          {!isButtonExpanded && (
            <button className="p-2" onClick={() => setIsButtonExpanded(true)}>
              <Icon id="playlist" width="19" height="14" className="text-on-tertiary-container" />
            </button>
          )}
        </div>
      </div>
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

export default FloatingActionButton
