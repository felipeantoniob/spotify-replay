import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import Track from '../components/Track'
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
  const setTimeRange = useBoundStore((state) => state.setTimeRange)
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  const userTopTracksQuery = api.spotify.getUserTopTracks.useQuery(
    { timeRange, limit: 50 },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  let topTracks: SpotifyApi.TrackObjectFull[] | null = null

  if (userTopTracksQuery.isSuccess) {
    topTracks = userTopTracksQuery.data.items
    setTracksUriArray(topTracks.map((track) => track.uri))
  }

  return (
    <>
      <Header title="Top Tracks">
        <TimeRangeRadio timeRange={timeRange} setTimeRange={setTimeRange} />
      </Header>
      {topTracks ? (
        <div className="flex flex-col px-4 pb-40">
          {topTracks.map((track, index) => (
            <Track key={track.id} track={track} index={index} showIndex showAlbum showDuration />
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

export default Tracks
