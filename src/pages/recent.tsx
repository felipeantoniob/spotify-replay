import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { trpc } from '../utils/trpc'
import Track from '../components/Track'
import Spinner from '../components/Spinner'
import { useEffect } from 'react'
import { useBoundStore } from '../store/index'

const Recent = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })

  const userRecentTracksQuery = trpc.useQuery(['spotify.getUserRecentTracks', { limit: 50 }])
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  let recentTracks: SpotifyApi.TrackObjectFull[] | null = null

  useEffect(() => {
    if (recentTracks) {
      setTracksUriArray(recentTracks.map((track) => track.uri))
    }
  }, [recentTracks, setTracksUriArray])

  if (userRecentTracksQuery.isSuccess) {
    recentTracks = userRecentTracksQuery.data.items.map((item) => item.track)
  }

  return (
    <>
      <Header title="Recent Tracks" />
      {recentTracks ? (
        <div className="flex flex-col px-4 pb-40">
          {recentTracks.map((track, index) => (
            <Track
              key={track.id + index}
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
