import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { AppLogo, SpotifyIcon } from '../components/UI/Icons'

const Home: NextPage = () => {
  return (
    <>
      <div className="grid min-h-screen place-content-center">
        <div className="flex flex-col items-center justify-center">
          <AppLogo />
        </div>
        <div className="mt-16 text-center font-sans text-lg">
          <p>
            <span className="font-bold">Recap</span> songs
          </p>
          <p>
            <span className="font-bold">Recreate</span> playlists
          </p>
          <p>
            <span className="font-bold">Rediscover</span> yourself
          </p>
        </div>
        <button
          onClick={() => void signIn('spotify', { callbackUrl: '/profile' })}
          className="mt-32 flex flex-row gap-2 rounded-full bg-black p-4 px-8 text-sm font-medium  text-white shadow-sm transition-all hover:opacity-75"
        >
          <SpotifyIcon />
          Log in with Spotify
        </button>
      </div>
    </>
  )
}

export default Home
