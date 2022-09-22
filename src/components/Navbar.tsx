import Link from 'next/link'
import { ReactNode } from 'react'
import { BsMusicNoteBeamed, BsPersonFill, BsSpotify } from 'react-icons/bs'
import { FiPieChart } from 'react-icons/fi'
import { GiMicrophone } from 'react-icons/gi'
import { MdHistory } from 'react-icons/md'

const NavButton = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href} passHref>
    <div className="btn btn-ghost no-animation flex flex-col text-sm normal-case text-gray-400 hover:bg-transparent hover:text-gray-200">
      {children}
    </div>
  </Link>
)

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-20 justify-center bg-black/75">
      <nav className="navbar flex justify-between">
        <NavButton href="/profile">
          <BsSpotify size="48px" className="text-green-600 hover:text-green-500" />
        </NavButton>
        <div>
          <NavButton href="/profile">
            <BsPersonFill size="24px" />
            <p>Profile</p>
          </NavButton>
          <NavButton href="/artists">
            <GiMicrophone size="24px" />
            Top Artists
          </NavButton>
          <NavButton href="/tracks">
            <BsMusicNoteBeamed size="24px" />
            Top Tracks
          </NavButton>
          <NavButton href="/genres">
            <FiPieChart size="24px" />
            Top Genres
          </NavButton>
          <NavButton href="/recent">
            <MdHistory size="24px" />
            Recent
          </NavButton>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
