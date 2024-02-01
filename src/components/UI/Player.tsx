import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import SpotifyPlayer, { type StylesOptions } from 'react-spotify-web-playback'

import { Colors } from '../../constants/Colors'
import { useBoundStore } from '../../store'

const ROUTERS_WITH_PLAYER = ['/profile', '/artists', '/tracks', '/genres']

const PlayerStyles: Partial<StylesOptions> = {
  bgColor: Colors['primary-container'],
  color: Colors['on-primary-container'],
  loaderColor: Colors['on-primary-container'],
  sliderColor: Colors['on-primary-container'],
  trackArtistColor: Colors['on-primary-container'],
  trackNameColor: Colors['on-primary-container'],
}

const Player = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const uri = useBoundStore((state) => state.uri)
  const isPlaying = useBoundStore((state) => state.isPlaying)
  const setIsPlaying = useBoundStore((state) => state.setIsPlaying)

  const accessToken = session?.accessToken ?? null

  return (
    <>
      {ROUTERS_WITH_PLAYER.includes(router.pathname) && accessToken && (
        <div className="mx-auto w-full md:pl-24">
          <div className="mx-auto mb-20 max-w-3xl bg-blue-500 md:mb-0">
            <SpotifyPlayer
              callback={(state) => setIsPlaying(state.isPlaying)}
              initialVolume={0.5}
              token={accessToken}
              play={isPlaying}
              uris={uri ? [`spotify:track:${uri}`] : ['']}
              showSaveIcon
              styles={PlayerStyles}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Player
