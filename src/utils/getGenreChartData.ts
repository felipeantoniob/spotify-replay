import { getArtistsOfGenre } from './index'

export type GenreObject = {
  genre: string
  artists: string[]
}

const getGenreChartData = (genresArray: string[], artists: SpotifyApi.ArtistObjectFull[]) => {
  const genresArtistsArray: GenreObject[] = []

  genresArray.map((genre) => {
    const artistsArray = getArtistsOfGenre(artists, genre)
    genresArtistsArray.push({ genre: genre, artists: artistsArray })
  })
  return genresArtistsArray
}

export default getGenreChartData
