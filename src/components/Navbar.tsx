import Link from 'next/link'
import { ReactNode } from 'react'
import { BsMusicNoteBeamed, BsPersonFill, BsSpotify } from 'react-icons/bs'
import { FiPieChart } from 'react-icons/fi'
import { GiMicrophone } from 'react-icons/gi'
import { MdHistory } from 'react-icons/md'

const NavButton = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href} passHref>
    <div className="btn btn-ghost no-animation flex flex-row justify-start text-sm normal-case text-gray-400 transition-all hover:bg-transparent hover:text-gray-200 md:flex-col">
      {children}
    </div>
  </Link>
)

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex h-20 justify-center bg-black/80">
        <nav className="navbar max-w-7xl justify-between">
          <div className="navbar-start">
            <NavButton href="/profile">
              <BsSpotify
                size="48px"
                className="text-green-600 transition-all hover:text-green-500"
              />
            </NavButton>
          </div>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal p-0">
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
            </ul>
          </div>
          <div className="navbar-end md:hidden">
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn border-0 bg-black hover:text-gray-200 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-40 bg-[#121212] p-2 shadow"
              >
                <NavButton href="/profile">
                  <BsPersonFill size="24px" className="mr-2" />
                  <p>Profile</p>
                </NavButton>
                <NavButton href="/artists">
                  <GiMicrophone size="24px" className="mr-2" />
                  Top Artists
                </NavButton>
                <NavButton href="/tracks">
                  <BsMusicNoteBeamed size="24px" className="mr-2" />
                  Top Tracks
                </NavButton>
                <NavButton href="/genres">
                  <FiPieChart size="24px" className="mr-2" />
                  Top Genres
                </NavButton>
                <NavButton href="/recent">
                  <MdHistory size="24px" className="mr-2" />
                  Recent
                </NavButton>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
