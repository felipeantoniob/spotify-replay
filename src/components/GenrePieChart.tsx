import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { getArtistsOfGenre } from '../utils/index'
import type { GenreObject } from '../utils/getGenreChartData'

const BACKGROUND_COLOR_ARRAY = [
  '#3cb44b99',
  '#e6194b99',
  '#ffe11999',
  '#4363d899',
  '#f5823199',
  '#911eb499',
  '#46f0f099',
  '#f032e699',
  '#bcf60c99',
  '#fabebe99',
  '#00808099',
  '#e6beff99',
  '#9a632499',
  '#fffac899',
  '#80000099',
  '#aaffc399',
  '#80800099',
  '#ffd8b199',
  '#00007599',
  '#80808099',
] as const

const BORDER_COLOR_ARRAY = [
  '#3cb44b11',
  '#e6194b11',
  '#ffe11911',
  '#4363d811',
  '#f5823111',
  '#911eb411',
  '#46f0f011',
  '#f032e611',
  '#bcf60c11',
  '#fabebe11',
  '#00808011',
  '#e6beff11',
  '#9a632411',
  '#fffac811',
  '#80000011',
  '#aaffc311',
  '#80800011',
  '#ffd8b111',
  '#00007511',
  '#80808011',
] as const

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
        backgroundColor: BACKGROUND_COLOR_ARRAY,
        borderColor: BORDER_COLOR_ARRAY,
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
              color: 'rgba(255, 255, 255, 1)',
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
