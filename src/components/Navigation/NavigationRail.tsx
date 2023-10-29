import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { Button } from '../UI/Button'
import { Icon, type IconId } from '../UI/Icon'

const BUTTONS = [
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
  {
    label: 'Log Out',
    pathname: '/',
    iconId: 'log-out',
    iconWidth: 18,
    iconHeight: 18,
  },
] as const

type NavigationButtonProps = {
  label: string
  pathname: string
  iconId: IconId
  iconWidth: number
  iconHeight: number
}

const NavigationButton = ({
  label,
  pathname,
  iconId,
  iconWidth,
  iconHeight,
}: NavigationButtonProps) => {
  const router = useRouter()

  return (
    <>
      <Button
        intent="navigation"
        size="medium"
        className={twMerge(pathname.includes(router.pathname) && 'bg-primary-container')}
      >
        <Icon
          id={iconId}
          width={iconWidth}
          height={iconHeight}
          className={`group-hover:text-on-primary-container  ${
            pathname.includes(router.pathname) ? 'text-on-primary-container' : 'text-primary'
          }`}
        />
      </Button>
      <span className="text-medium text-sm text-primary">{label}</span>
    </>
  )
}

const NavigationRail = () => {
  return (
    <nav className="fixed bottom-0 left-0 hidden h-full w-20 flex-col items-center overflow-y-auto overflow-x-hidden rounded-r-2xl bg-background md:flex">
      <Link href="/profile" className="mt-16 flex flex-col items-center justify-center gap-1">
        <NavigationButton {...BUTTONS[0]} />
      </Link>
      <div className="mt-14 flex flex-col gap-4">
        <Link href="/tracks" className="flex flex-col items-center justify-center gap-1">
          <NavigationButton {...BUTTONS[1]} />
        </Link>
        <Link href="/artists" className="flex flex-col items-center justify-center gap-1">
          <NavigationButton {...BUTTONS[2]} />
        </Link>
        <Link href="/genres" className="flex flex-col items-center justify-center gap-1">
          <NavigationButton {...BUTTONS[3]} />
        </Link>
      </div>
      <div className="mt-auto flex flex-1 flex-col items-center justify-center pt-4">
        <div
          className="flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-1"
          onClick={() => void signOut()}
        >
          <NavigationButton {...BUTTONS[4]} />
        </div>
      </div>
    </nav>
  )
}

export default NavigationRail
