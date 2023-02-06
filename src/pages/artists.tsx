import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Artist from '../components/Artist'
import ArtistRow from '../components/ArtistRow'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

let topArtists: SpotifyApi.ArtistObjectFull[] = []
let topArtistsTopTracks: SpotifyApi.TrackObjectFull[] = []

const Artists = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)
  const setTracksUriArray = useBoundStore((state) => state.setTracksUriArray)

  const userTopArtistsQuery = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit: 10 },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  const topArtistsTopTracksQuery = api.spotify.getMultipleArtistsTopTracks.useQuery(
    {
      artistsIdArray: topArtists.map((artist) => artist.id) ?? [''],
      artistsLimit: 20,
      tracksLimit: 5,
    },
    { enabled: topArtists.length > 0 }
  )


  if (userTopArtistsQuery.isSuccess) {
    topArtists = userTopArtistsQuery.data.items
  }

  if (topArtistsTopTracks) {
    void topArtistsTopTracksQuery.refetch()
  }

  if (topArtistsTopTracksQuery.isSuccess) {
    topArtistsTopTracks = topArtistsTopTracksQuery.data
    console.log(topArtistsTopTracks)

    setTracksUriArray(topArtistsTopTracks.map((track) => track.uri).sort(() => Math.random() - 0.5))
  }

  return (
    <>
      <Header title="Your Top 10 Artists">
        <TimeRangeRadio />
      </Header>
      {topArtistsTopTracksQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          {topArtists.length > 0 && (
            <>
              <div className="hidden grid pb-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {topArtists.map((artist) => (
                  <Artist key={artist.id} {...artist} />
                ))}
              </div>
              <div>
                {topArtists.map((artist) => (
                  <ArtistRow key={artist.id} artist={artist} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Artists
