import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import GenrePieChart from '../components/GenrePieChart'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { useBoundStore } from '../store/index'
import { api } from '../utils/api'
import type { GenreObject } from '../utils/getGenreChartData'
import {
  getAllArtistsGenres,
  getGenreChartData,
  getGenreFrequency,
  getTopGenres,
} from '../utils/index'

let topArtists: SpotifyApi.ArtistObjectFull[] | null = null
let genreChartData: GenreObject[] = []

const Genres = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)

  const userTopArtistsQuery = api.spotify.getUserTopArtists.useQuery(
    { timeRange, limit: 50 },
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
      <Header title="Your Top Genres">
        <TimeRangeRadio />
      </Header>
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
