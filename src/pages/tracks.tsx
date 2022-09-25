import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '../components/Header'
import type { TimeRangeType } from '../components/TimeRangeRadio'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { trpc } from '../utils/trpc'
import Spinner from '../components/Spinner'
import Track from '../components/Track'

const Tracks = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })

  const [timeRange, setTimeRange] = useState<TimeRangeType>('short_term')
  const userTopTracksQuery = trpc.useQuery(['spotify.getUserTopTracks', { timeRange, limit: 50 }], {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })

  let topTracks: SpotifyApi.TrackObjectFull[] | null = null

  if (userTopTracksQuery.isSuccess) {
    topTracks = userTopTracksQuery.data.items
  }

  return (
    <>
      <Header title="Top Tracks">
        <TimeRangeRadio timeRange={timeRange} setTimeRange={setTimeRange} />
      </Header>
      {topTracks ? (
        <div className="flex flex-col px-4 pb-32">
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
