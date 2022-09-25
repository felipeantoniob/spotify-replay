const getGenreFrequency = (
  genresArray: string[]
): {
  [key: string]: number
} => {
  const genreFrequency: { [key: string]: number } = {}
  genresArray.map((genre) => {
    genreFrequency[genre] = (genreFrequency[genre] || 0) + 1
  })
  return genreFrequency
}

export default getGenreFrequency
