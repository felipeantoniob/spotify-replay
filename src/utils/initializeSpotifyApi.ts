import SpotifyWebApi from 'spotify-web-api-node'

const setCredentials = async (
  accessToken: string,
  refreshToken: string
): Promise<SpotifyWebApi> => {
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setCredentials({
    accessToken,
    refreshToken,
  })
  return spotifyApi
}

export const initializeSpotifyApi = async (accessToken: string, refreshToken: string) => {
  const spotifyApi = await setCredentials(accessToken, refreshToken)
  return spotifyApi
}
