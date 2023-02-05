import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Track from '../components/Track'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

const Recent = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
     void router.push('/')
    },
  })
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  const userRecentTracksQuery = api.spotify.getUserRecentTracks.useQuery({ limit: 50 })

  let recentTracks: SpotifyApi.TrackObjectFull[] | null = null

  if (userRecentTracksQuery.isSuccess) {
    recentTracks = userRecentTracksQuery.data.items.map((item) => item.track)
    setTracksUriArray(recentTracks.map((track) => track.uri))
  }

  return (
    <>
      <Header title="Recent Tracks" />
      {recentTracks ? (
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
      ) : (
        <div className="h-screen">
          <div className="h-1/2">
            <Spinner />
          </div>
        </div>
      )}
    </>
  )
}

export default Recent
