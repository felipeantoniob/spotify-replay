import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { LogOutIcon, ReplayLogo } from '../components/UI/Icons'
import ArtistsCarousel from '../components/Profile/ArtistsCarousel'
import TracksCarousel from '../components/Profile/TracksCarousel'
import Spinner from '../components/UI/Spinner'
import { api } from '../utils/api'

const NUMBER_OF_CAROUSEL_ITEMS = 20

const queryOptions = {
  keepPreviousData: true,
  refetchOnWindowFocus: false,
}

const Profile = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const userInfoQuery = api.spotify.getUserInfo.useQuery(undefined, queryOptions)
  const userTopTracksQuery = api.spotify.getUserTopTracks.useQuery(
    { timeRange: 'short_term', limit: NUMBER_OF_CAROUSEL_ITEMS },
    queryOptions
  )
  const userTopArtistsQuery = api.spotify.getUserTopArtists.useQuery(
    { timeRange: 'short_term', limit: NUMBER_OF_CAROUSEL_ITEMS },
    queryOptions
  )

  if (userInfoQuery.isLoading)
    return (
      <div className="grid h-screen place-items-center">
        <Spinner />
      </div>
    )

  return (
    <div className="min-h-screen pt-8">
      <div className="flex flex-col pb-40 text-center">
        <div className="mx-4">
          <div className="flex flex-row justify-between">
            <ReplayLogo />
            <button
              onClick={() => void signOut()}
              className="group flex items-center justify-center rounded-md border-2 border-outline p-2 transition-all active:border-transparent active:bg-[#C8B5E1] md:hidden"
            >
              <LogOutIcon className="fill-white group-active:fill-on-primary-container" />
            </button>
          </div>
          {userInfoQuery?.data?.body && (
            <h1 className="pt-4 text-left font-sans text-2xl font-bold text-white">
              Welcome to your replay, {userInfoQuery.data.body.display_name}!
            </h1>
          )}
        </div>
        {userTopTracksQuery.isSuccess && <TracksCarousel tracks={userTopTracksQuery.data.items} />}
        {userTopArtistsQuery.isSuccess && (
          <ArtistsCarousel artists={userTopArtistsQuery.data.items} />
        )}
      </div>
    </div>
  )
}

export default Profile
