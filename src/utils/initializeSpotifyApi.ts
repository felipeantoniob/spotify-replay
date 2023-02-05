import SpotifyWebApi from 'spotify-web-api-node'

const setCredentials = (accessToken: string, refreshToken: string): SpotifyWebApi => {
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setCredentials({
    accessToken,
    refreshToken,
  })
  return spotifyApi
}

export const initializeSpotifyApi = (accessToken: string, refreshToken: string) => {
  const spotifyApi = setCredentials(accessToken, refreshToken)
  return spotifyApi
}
