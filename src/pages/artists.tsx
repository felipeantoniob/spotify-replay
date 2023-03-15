import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Artist from '../components/Artists/Artist'
import ArtistPlaceholder from '../components/Artists/ArtistPlaceholder'
import Header from '../components/UI/Header'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'

const Artists = () => {
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
  const userTopArtistsQuery = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )
  const topArtistsTopTracksQuery = api.spotify.getMultipleArtistsTopTracks.useQuery(
    {
      artistsIdArray: userTopArtistsQuery.data?.items.map((artist) => artist.id) ?? [''],
      artistsLimit: 20,
      tracksLimit: 5,
    },
    { enabled: !!userTopArtistsQuery.data?.items }
  )

  useEffect(() => {
    if (topArtistsTopTracksQuery.isSuccess) {
      setTracksUriArray(
        topArtistsTopTracksQuery.data.map((track) => track.uri).sort(() => Math.random() - 0.5)
      )
    }
  }, [topArtistsTopTracksQuery, setTracksUriArray])

  return (
    <>
      <Header title="Your Top Artists" />
      <div className="grid grid-cols-2 pb-40 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {userTopArtistsQuery.isLoading || userTopArtistsQuery.isFetching ? (
          <>
            {[...new Array(limit).keys()].map((_, index) => (
              <ArtistPlaceholder key={index} />
            ))}
          </>
        ) : (
          <>
            {userTopArtistsQuery.data?.items.map((artist) => (
              <Artist key={artist.id} artist={artist} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Artists
