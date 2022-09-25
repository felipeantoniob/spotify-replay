const getArtistsOfGenre = (artists: SpotifyApi.ArtistObjectFull[], genre: string) => {
  const artistArray: string[] = []

  artists.map((artist) => {
    const artistIncludesGenre = artist.genres.includes(genre)

    if (artistIncludesGenre) {
      artistArray.push(artist.name)
    }
  })
  return artistArray
}

export default getArtistsOfGenre
