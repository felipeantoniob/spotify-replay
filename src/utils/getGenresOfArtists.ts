const getAllArtistsGenres = (artists: SpotifyApi.ArtistObjectFull[]): string[] => {
  let genresArray: string[] = []

  artists.map((artist) => {
    genresArray = [...genresArray, ...artist.genres]
  })
  return genresArray
}

export default getAllArtistsGenres
