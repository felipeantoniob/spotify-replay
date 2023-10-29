import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { useBoundStore } from '../../store'
import { Button } from '../UI/Button'
import { Icon, type IconId } from '../UI/Icon'

const TabIcon = ({
  isSelected,
  id,
  width,
  height,
}: {
  isSelected: boolean
  id: IconId
  width: number
  height: number
}) => (
  <Icon
    id={id}
    width={width}
    height={height}
    className={`group-hover:text-on-primary-container ${
      isSelected ? 'text-on-primary-container' : 'text-primary'
    }`}
  />
)

const TABS = [
  {
    label: 'Profile',
    pathname: '/profile',
    iconId: 'profile',
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    label: 'Tracks',
    pathname: '/tracks',
    iconId: 'tracks',
    iconWidth: 13,
    iconHeight: 18,
  },
  {
    label: 'Artists',
    pathname: '/artists',
    iconId: 'artists',
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    label: 'Genres',
    pathname: '/genres',
    iconId: 'genres',
    iconWidth: 23,
    iconHeight: 20,
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
              <TabIcon
                isSelected={tab.pathname.includes(router.pathname)}
                id={tab.iconId}
                width={tab.iconWidth}
                height={tab.iconHeight}
              />
            </Button>
            {!isPlaying && <p className="text-xs font-medium text-primary">{tab.label}</p>}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default BottomTabsNavigator
