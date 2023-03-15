import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import GenrePieChart from '../components/Genres/GenrePieChart'
import Header from '../components/UI/Header'
import Spinner from '../components/UI/Spinner'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'
import type { GenreObject } from '../utils/getGenreChartData'
import {
  getAllArtistsGenres,
  getGenreChartData,
  getGenreFrequency,
  getTopGenres,
} from '../utils/index'

const NUMBER_OF_ARTISTS = 50

const Genres = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)
  let topArtists: SpotifyApi.ArtistObjectFull[] | null = null
  let genreChartData: GenreObject[] = []

  const userTopArtistsQuery = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit: NUMBER_OF_ARTISTS },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  )

  if (userTopArtistsQuery.isSuccess) {
    topArtists = userTopArtistsQuery.data.items
    const genresArray = getAllArtistsGenres(topArtists)
    const genreFrequencyArray = getGenreFrequency(genresArray)
    const topGenresArray = getTopGenres(genreFrequencyArray, 20)
    const genresArtistsObject = getGenreChartData(topGenresArray, topArtists)
    genreChartData = genresArtistsObject
  }

  return (
    <>
      <Header title="Your Top Genres" />
      {userTopArtistsQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          {genreChartData.length > 0 && (
            <div className="flex h-screen justify-center pb-16">
              <div className="w-full md:w-3/4 lg:w-1/2">
                {genreChartData && topArtists && (
                  <GenrePieChart genreChartData={genreChartData} topArtists={topArtists} />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Genres
