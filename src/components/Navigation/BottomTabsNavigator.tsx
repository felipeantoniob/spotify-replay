import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { useBoundStore } from '../../store'
import { Button } from '../UI/Button'
import { ArtistsIcon, GenresIcon, ProfileIcon, TracksIcon } from '../UI/Icons'

const TABS = [
  {
    label: 'Profile',
    pathname: '/profile',
    icon: ProfileIcon,
  },
  {
    label: 'Tracks',
    pathname: '/tracks',
    icon: TracksIcon,
  },
  {
    label: 'Artists',
    pathname: '/artists',
    icon: ArtistsIcon,
  },
  {
    label: 'Genres',
    pathname: '/genres',
    icon: GenresIcon,
  },
] as const

const BottomTabsNavigator = () => {
  const router = useRouter()
  const isPlaying = useBoundStore((state) => state.isPlaying)

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 flex h-20 flex-row  bg-background md:hidden">
      {TABS.map((tab, index) => (
        <div key={index} className="flex h-full flex-1 flex-col items-center justify-center">
          <Link
            href={tab.pathname}
            className="flex cursor-pointer flex-col items-center justify-center gap-1"
          >
            <Button
              intent="navigation"
              size="medium"
              className={twMerge(tab.pathname.includes(router.pathname) && 'bg-primary-container')}
            >
              {tab.icon({ isSelected: tab.pathname.includes(router.pathname) })}
            </Button>
            {!isPlaying && <p className="text-xs font-medium text-primary">{tab.label}</p>}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default BottomTabsNavigator
