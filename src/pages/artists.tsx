import { trpc } from '../utils/trpc'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
const Artists = () => {
  const userTopArtistsQuery = trpc.useQuery(
    ['spotify.getUserTopArtists', { timeRange: 'short_term', limit: 20 }],
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    console.log(userTopArtistsQuery.data)
  }, [userTopArtistsQuery])

  return (
    <main>
      <Navbar />
      <h1>Top Artists</h1>
    </main>
  )
}

export default Artists
