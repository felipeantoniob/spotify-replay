import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import {
  GENRE_CHART_BACKGROUND_COLOR_ARRAY,
  GENRE_CHART_BORDER_COLOR_ARRAY,
} from '../../constants/Colors'
import type { GenreObject } from '../../utils/getGenreChartData'
import { getArtistsOfGenre } from '../../utils/index'

ChartJS.register(ArcElement, Tooltip, Legend)

type GenrePieChartProps = {
  genreChartData: GenreObject[]
  topArtists: SpotifyApi.ArtistObjectFull[]
}

const GenrePieChart = ({ genreChartData, topArtists }: GenrePieChartProps) => {
  const data = {
    labels: genreChartData.map((genreObject) => genreObject.genre),
    datasets: [
      {
        label: 'Top Genres',
        data: genreChartData.map((genreObject) => genreObject.artists.length),
        backgroundColor: GENRE_CHART_BACKGROUND_COLOR_ARRAY,
        borderColor: GENRE_CHART_BORDER_COLOR_ARRAY,
        borderWidth: 1,
      },
    ],
  }

  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 20,
              color: '#fff',
              font: {
                size: 12,
                weight: '700',
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${getArtistsOfGenre(topArtists, context.label).join(
                  ', '
                )}`
              },
            },
            bodyFont: { size: 12 },
          },
        },
      }}
    />
  )
}

export default GenrePieChart
