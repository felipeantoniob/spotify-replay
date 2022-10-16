import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'

const Home: NextPage = () => {
  return (
    <>
      <main className="grid min-h-screen place-content-center  ">
        <button
          onClick={() => signIn('spotify', { callbackUrl: '/profile' })}
          className="rounded-full bg-green-600 p-4 px-8 text-xl font-bold tracking-widest text-gray-200 shadow-sm  shadow-slate-700 transition-all hover:bg-green-700"
        >
          LOG IN TO SPOTIFY
        </button>

        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500"></div>
      </main>
    </>
  )
}

export default Home
