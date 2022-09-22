import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-10 flex justify-center bg-black/75">
      <div className="navbar flex max-w-7xl justify-between">
        <div className="">
          <a
            onClick={() => router.push('/')}
            className="btn btn-ghost bg-transparent text-xl normal-case text-gray-400 hover:bg-transparent hover:text-gray-200"
          >
            Home
          </a>
        </div>
        <div>
          <div className="">
            <a
              onClick={() => router.push('/profile')}
              className="btn btn-ghost bg-transparent text-xl normal-case text-gray-400 hover:bg-transparent hover:text-gray-200"
            >
              Profile
            </a>
          </div>
          <div className="">
            <a
              onClick={() => router.push('/artists')}
              className="btn btn-ghost bg-transparent text-xl normal-case text-gray-400 hover:bg-transparent hover:text-gray-200"
            >
              Top Artists
            </a>
          </div>
          <div className="">
            <a
              onClick={() => router.push('/tracks')}
              className="btn btn-ghost bg-transparent text-xl normal-case text-gray-400 hover:bg-transparent hover:text-gray-200"
            >
              Top Tracks
            </a>
          </div>
          <div className="">
            <a
              onClick={() => router.push('/genres')}
              className="btn btn-ghost bg-transparent text-xl normal-case text-gray-400 hover:bg-transparent hover:text-gray-200"
            >
              Top Genres
            </a>
          </div>
          <div className="">
            <a
              onClick={() => router.push('/recent')}
              className="btn btn-ghost bg-transparent text-xl normal-case text-gray-400 hover:bg-transparent hover:text-gray-200"
            >
              Recent
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
