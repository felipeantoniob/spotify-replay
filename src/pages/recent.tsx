import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Track from '../components/Track'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

let recentTracks: SpotifyApi.TrackObjectFull[] = []

const Recent = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  const userRecentTracksQuery = api.spotify.getUserRecentTracks.useQuery({ limit: 10 })

  if (userRecentTracksQuery.isSuccess) {
    recentTracks = userRecentTracksQuery.data.items.map((item) => item.track)
    setTracksUriArray(recentTracks.map((track) => track.uri))
  }

  return (
    <>
      <Header title="Recent Tracks" />
      {userRecentTracksQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          {recentTracks.length > 0 && (
            <div className="flex flex-col px-4 pb-40">
              {recentTracks.map((track, index) => (
                <Track
                  key={`${track.id} ${index}`}
                  track={track}
                  index={index}
                  showIndex
                  showAlbum
                  showDuration
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Recent
