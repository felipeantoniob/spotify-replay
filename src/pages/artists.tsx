import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Artist from '../components/Artist'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import type { TimeRangeType } from '../components/TimeRangeRadio'
import TimeRangeRadio from '../components/TimeRangeRadio'
import { trpc } from '../utils/trpc'

const Artists = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })

  const [timeRange, setTimeRange] = useState<TimeRangeType>('short_term')
  const userTopArtistsQuery = trpc.useQuery(
    ['spotify.getUserTopArtists', { timeRange, limit: 50 }],
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  let topArtists: SpotifyApi.ArtistObjectFull[] | null = null

  if (userTopArtistsQuery.isSuccess) {
    topArtists = userTopArtistsQuery.data.items
  }

  return (
    <main className="pt-16">
      <div className="container mx-auto max-w-7xl">
        <Header title="Top Artists">
          <TimeRangeRadio timeRange={timeRange} setTimeRange={setTimeRange} />
        </Header>
        {topArtists ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {userTopArtistsQuery.data?.items.map((artist) => (
              <Artist key={artist.id} {...artist} />
            ))}
          </div>
        ) : (
          <div className="h-screen">
            <div className="h-1/2">
              <Spinner />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Artists
