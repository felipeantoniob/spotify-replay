import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useUriStore } from '../store/index'
import Navbar from './Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession()
  const uri = useUriStore((state) => state.uri)

  let accessToken = ''

  if (session) {
    accessToken = session.accessToken as string
  }

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className="container mx-auto max-w-7xl">{children}</div>
      </main>
      {accessToken && uri && (
        <div className="fixed bottom-0 left-0 right-0 ">
          <SpotifyPlayer
            autoPlay
            initialVolume={0.5}
            token={accessToken}
            uris={['spotify:track:' + uri]}
            showSaveIcon
            styles={{
              bgColor: '#121212',
              color: '#fff',
              loaderColor: '#fff',
              sliderColor: '#1cb954',
              trackArtistColor: '#ccc',
              trackNameColor: '#fff',
            }}
          />
        </div>
      )}
    </>
  )
}

export default Layout
