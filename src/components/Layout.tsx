import { Sen } from '@next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import BottomTabsNavigator from './Navigation/BottomTabsNavigator'
import NavigationRail from './Navigation/NavigationRail'
import FloatingActionButton from './UI/FloatingActionButton'
import Player from './UI/Player'

const sen = Sen({ weight: ['400', '700', '800'], subsets: ['latin'], variable: '--font-sen' })

const ROUTERS_WITH_FAB = ['/artists', '/tracks']
const ROUTERS_WITH_BOTTOM_TABS = ['/profile', '/artists', '/tracks', '/genres']

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Spotify Replay</title>
        <meta
          name="description"
          content="Personalized music dashboard that displays users' listening habits, including their top artists, songs, and genres."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        className={twMerge(
          'fixed h-screen w-screen bg-cover',
          ['/'].includes(router.pathname)
            ? 'bg-[url(/img/gradient.png)] md:bg-[url(/img/desktop-gradient.png)]'
            : 'bg-primary'
        )}
      />
      <div className="relative">
        <main
          className={twMerge(
            'z-10 pt-8',
            sen.variable,
            ROUTERS_WITH_BOTTOM_TABS.includes(router.pathname) && 'md:pl-20'
          )}
        >
          <div className="container mx-auto max-w-7xl">{children}</div>
        </main>
        <div className="fixed bottom-0 left-0 right-0">
          {ROUTERS_WITH_BOTTOM_TABS.includes(router.pathname) && <NavigationRail />}
          {ROUTERS_WITH_FAB.includes(router.pathname) && <FloatingActionButton />}
          <Player />
          {ROUTERS_WITH_BOTTOM_TABS.includes(router.pathname) && <BottomTabsNavigator />}
        </div>
      </div>
    </>
  )
}

export default Layout
