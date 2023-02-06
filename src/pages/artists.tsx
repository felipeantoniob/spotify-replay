import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Artist from '../components/Artist'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

let topArtists: SpotifyApi.ArtistObjectFull[] = []

const Artists = () => {
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

  let topArtistsTopTracks: SpotifyApi.TrackObjectFull[] | null = null

  const topArtistsTopTracksQuery = api.spotify.getMultipleArtistsTopTracks.useQuery(
    {
      artistsIdArray: topArtists.map((artist) => artist.id) ?? [''],
      artistsLimit: 20,
      tracksLimit: 5,
    },
    { enabled: topArtists.length > 0 }
  )

  const userTopArtistsQuery = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit: 10 },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  if (userTopArtistsQuery.isSuccess) {
    topArtists = userTopArtistsQuery.data.items
  }

  if (topArtistsTopTracks) {
    void topArtistsTopTracksQuery.refetch()
  }

  if (topArtistsTopTracksQuery.isSuccess) {
    topArtistsTopTracks = topArtistsTopTracksQuery.data
    setTracksUriArray(topArtistsTopTracks.map((track) => track.uri).sort(() => Math.random() - 0.5))
  }

  return (
    <>
      <Header title="Your Top 10 Artists">
        <TimeRangeRadio timeRange={timeRange} setTimeRange={setTimeRange} />
      </Header>
      {topArtists.length > 0 ? (
        <div className="grid pb-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {topArtists.map((artist) => (
            <Artist key={artist.id} {...artist} />
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

export default Artists
