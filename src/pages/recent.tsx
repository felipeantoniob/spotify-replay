import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'

const Recent = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })

  return (
    <main className="pt-16">
      <div className="container mx-auto max-w-7xl">
        <Header title="Recent Tracks" />
      </div>
    </main>
  )
}

export default Recent
