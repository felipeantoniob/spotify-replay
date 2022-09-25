import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import Track from '../components/Track'
import { trpc } from '../utils/trpc'

const queryOptions = {
  keepPreviousData: true,
  refetchOnWindowFocus: false,
}

let userInfo: SpotifyApi.CurrentUsersProfileResponse
let userTopTracks: SpotifyApi.TrackObjectFull[] = []
let userTopArtists: SpotifyApi.ArtistObjectFull[] = []

const Profile = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })
  const userInfoQuery = trpc.useQuery(['spotify.getUserInfo'], queryOptions)
  const userTopTracksQuery = trpc.useQuery(
    ['spotify.getUserTopTracks', { timeRange: 'long_term', limit: 10 }],
    queryOptions
  )
  const userTopArtistsQuery = trpc.useQuery(
    ['spotify.getUserTopArtists', { timeRange: 'long_term', limit: 10 }],
    queryOptions
  )

  if (userInfoQuery.isLoading || userTopTracksQuery.isLoading || userTopArtistsQuery.isLoading)
    return (
      <div className="h-screen">
        <div className="h-1/2">
          <Spinner />
        </div>
      </div>
    )

  if (userInfoQuery.isError || userTopTracksQuery.isError || userTopArtistsQuery.isError) {
    signOut()
    router.push('/')
  }

  if (userInfoQuery.data && userTopTracksQuery.data && userTopArtistsQuery.data) {
    userInfo = userInfoQuery.data.body
    userTopTracks = userTopTracksQuery.data.items
    userTopArtists = userTopArtistsQuery.data.items
  }

  return (
    <>
      <div className="mb-8 flex flex-col text-center">
        <div>
          <Image
            className="rounded-full"
            src={userInfo.images && userInfo.images[0] ? userInfo.images[0].url : ''}
            alt={userInfo.display_name}
            height={150}
            width={150}
          />
        </div>
        <h1 className="py-4 text-4xl font-bold tracking-wide text-gray-200">
          {userInfo.display_name}
        </h1>
        <div className="">
          <Button text="Sign Out" onClick={() => signOut()} />
        </div>
      </div>
      <div className="mx-8 grid max-w-6xl md:grid-cols-2">
        <div className="flex-1 p-4">
          <h3 className="mb-8 text-lg font-bold">Top Artists of All Time</h3>
          {userTopArtists.map((artist: SpotifyApi.ArtistObjectFull) => (
            <div
              key={artist.id}
              className="flex h-16 items-center rounded-md pl-2 transition-all duration-75 hover:bg-gray-500/25"
            >
              <Image
                src={artist.images && artist.images[0] ? artist.images[0].url : ''}
                alt={artist.name}
                height={50}
                width={50}
                className="rounded-full object-cover"
              />
              <p className="ml-3">{artist.name}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <h3 className="mb-8 text-lg font-bold">Top Tracks of All Time</h3>
          {userTopTracks.map((track, index) => (
            <Track key={track.id} track={track} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
