import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/UI/Header'
import Track from '../components/Tracks/Track'
import TrackPlaceholder from '../components/Tracks/TrackPlaceholder'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

const Tracks = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)
  const limit = useBoundStore((state) => state.limit)
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)
  const userTopTracksQuery = api.spotify.getUserTopTracks.useQuery(
    { timeRange, limit },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  useEffect(() => {
    if (userTopTracksQuery.isSuccess) {
      setTracksUriArray(userTopTracksQuery.data.items.map((track) => track.uri))
    }
  }, [setTracksUriArray, userTopTracksQuery.data?.items, userTopTracksQuery.isSuccess])

  return (
    <>
      <Header title="Your Top Tracks" />
      {userTopTracksQuery.isLoading || userTopTracksQuery.isFetching ? (
        <>
          {[...new Array(limit).keys()].map((_, index) => (
            <TrackPlaceholder key={index} />
          ))}
        </>
      ) : (
        <>
          <div className="mx-4 flex flex-col pb-40">
            {userTopTracksQuery?.data?.items.map((track, index) => (
              <Track key={track.id} track={track} index={index} showIndex showAlbum showDuration />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Tracks
