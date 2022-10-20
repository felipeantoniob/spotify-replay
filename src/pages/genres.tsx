import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import GenrePieChart from '../components/GenrePieChart'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { useBoundStore } from '../store/index'
import type { GenreObject } from '../utils/getGenreChartData'
import {
  getAllArtistsGenres,
  getGenreChartData,
  getGenreFrequency,
  getTopGenres,
} from '../utils/index'
import { trpc } from '../utils/trpc'

let topArtists: SpotifyApi.ArtistObjectFull[] | null = null
let genreChartData: GenreObject[] = []

const Genres = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })
  const timeRange = useBoundStore((state) => state.timeRange)
  const setTimeRange = useBoundStore((state) => state.setTimeRange)
  const userTopArtistsQuery = trpc.useQuery(
    ['spotify.getUserTopArtists', { timeRange, limit: 50 }],
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
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
      <Header title="Top Genres">
        <TimeRangeRadio timeRange={timeRange} setTimeRange={setTimeRange} />
      </Header>
      {genreChartData ? (
        <div className="flex h-screen justify-center pb-16">
          <div className="w-full md:w-3/4 lg:w-1/2">
            {genreChartData && topArtists && (
              <GenrePieChart genreChartData={genreChartData} topArtists={topArtists} />
            )}
          </div>
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

export default Genres
