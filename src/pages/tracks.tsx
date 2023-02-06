import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import Track from '../components/Track'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

let topTracks: SpotifyApi.TrackObjectFull[] = []

const Tracks = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  const userTopTracksQuery = api.spotify.getUserTopTracks.useQuery(
    { timeRange, limit: 10 },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  if (userTopTracksQuery.isSuccess) {
    topTracks = userTopTracksQuery.data.items
    setTracksUriArray(topTracks.map((track) => track.uri))
  }

  return (
    <>
      <Header title="Your Top 10 Songs">
        <TimeRangeRadio />
      </Header>
      {userTopTracksQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          {topTracks.length > 0 && (
            <div className="flex flex-col pb-40">
              {topTracks.map((track, index) => (
                <Track
                  key={track.id}
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

export default Tracks
