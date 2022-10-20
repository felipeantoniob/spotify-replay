import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Artist from '../components/Artist'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { useBoundStore } from '../store/index'
import { trpc } from '../utils/trpc'

let topArtists: SpotifyApi.ArtistObjectFull[] = []

const Artists = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)
  const setTimeRange = useBoundStore((state) => state.setTimeRange)
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  let topArtistsTopTracks: SpotifyApi.TrackObjectFull[] | null = null

  const topArtistsTopTracksQuery = trpc.useQuery(
    [
      'spotify.getMultipleArtistsTopTracks',
      {
        artistsIdArray: topArtists.map((artist) => artist.id) ?? [''],
        artistsLimit: 20,
        tracksLimit: 5,
      },
    ],
    { enabled: !!topArtists }
  )

  const userTopArtistsQuery = trpc.useQuery(
    ['spotify.getUserTopArtists', { timeRange, limit: 50 }],
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    if (topArtistsTopTracks) {
      setTracksUriArray(
        topArtistsTopTracks.map((track) => track.uri).sort(() => Math.random() - 0.5)
      )
    }
  }, [topArtistsTopTracks, setTracksUriArray])

  if (userTopArtistsQuery.isSuccess) {
    topArtists = userTopArtistsQuery.data.items
  }

  if (topArtistsTopTracks) {
    topArtistsTopTracksQuery.refetch()
  }

  if (topArtistsTopTracksQuery.isSuccess) {
    topArtistsTopTracks = topArtistsTopTracksQuery.data
  }

  return (
    <>
      <Header title="Top Artists">
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
