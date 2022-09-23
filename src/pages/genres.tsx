import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '../components/Header'
import type { TimeRangeType } from '../components/TimeRangeRadio'
import TimeRangeRadio from '../components/TimeRangeRadio'

const Genres = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })
  const [timeRange, setTimeRange] = useState<TimeRangeType>('short_term')

  return (
    <main className="pt-16">
      <div className="container mx-auto max-w-7xl">
        <Header title="Top Genres">
          <TimeRangeRadio timeRange={timeRange} setTimeRange={setTimeRange} />
        </Header>
      </div>
    </main>
  )
}

export default Genres
