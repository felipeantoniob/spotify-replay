import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { Button } from '../UI/Button'
import { ArtistsIcon, GenresIcon, LogOutIcon, ProfileIcon, TracksIcon } from '../UI/Icons'

const NavigationRail = () => {
  const router = useRouter()
  return (
    <nav className="fixed left-0 bottom-0 hidden h-full w-20 flex-col items-center overflow-y-scroll rounded-r-2xl bg-background md:flex">
      <Link href="/profile" className="mt-16 flex flex-col items-center justify-center gap-1">
        <Button
          intent="navigation"
          size="medium"
          className={twMerge('/profile'.includes(router.pathname) && 'bg-primary-container')}
        >
          <ProfileIcon isSelected={'/profile'.includes(router.pathname)} />
        </Button>
        <span className=" text-medium text-sm text-primary">Profile</span>
      </Link>
      <div className="mt-14 flex flex-col gap-4">
        <Link href="/tracks" className="flex flex-col items-center justify-center gap-1">
          <Button
            intent="navigation"
            size="medium"
            className={twMerge('/tracks'.includes(router.pathname) && 'bg-primary-container')}
          >
            <TracksIcon isSelected={'/tracks'.includes(router.pathname)} />
          </Button>
          <span className=" text-medium text-sm text-primary">Tracks</span>
        </Link>
        <Link href="/artists" className="flex flex-col items-center justify-center gap-1">
          <Button
            intent="navigation"
            size="medium"
            className={twMerge('/artists'.includes(router.pathname) && 'bg-primary-container')}
          >
            <ArtistsIcon isSelected={'/artists'.includes(router.pathname)} />
          </Button>
          <span className=" text-medium text-sm text-primary">Artists</span>
        </Link>
        <Link href="/genres" className="flex flex-col items-center justify-center gap-1">
          <Button
            intent="navigation"
            size="medium"
            className={twMerge('/genres'.includes(router.pathname) && 'bg-primary-container')}
          >
            <GenresIcon isSelected={'/genres'.includes(router.pathname)} />
          </Button>
          <span className="text-medium text-sm text-primary">Genres</span>
        </Link>
      </div>
      <div className="mt-auto flex flex-1 flex-col items-center justify-center pt-4">
        <button className="flex flex-col items-center justify-center gap-1 rounded-2xl py-1 px-2">
          <LogOutIcon />
          <span className="text-medium text-sm text-primary">Log Out</span>
        </button>
      </div>
    </nav>
  )
}

export default NavigationRail
