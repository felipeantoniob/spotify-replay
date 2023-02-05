import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, type ReactNode } from 'react'
import { BsMusicNoteBeamed, BsPersonFill, BsSpotify } from 'react-icons/bs'
import { FiPieChart } from 'react-icons/fi'
import { GiMicrophone } from 'react-icons/gi'
import { MdHistory } from 'react-icons/md'

const LINKS = [
  { href: '/profile', label: 'Profile', icon: <BsPersonFill size="24px" className="mr-2" /> },
  { href: '/artists', label: 'Top Artists', icon: <GiMicrophone size="24px" className="mr-2" /> },
  {
    href: '/tracks',
    label: 'Top Tracks',
    icon: <BsMusicNoteBeamed size="24px" className="mr-2" />,
  },
  { href: '/genres', label: 'Top Genres', icon: <FiPieChart size="24px" className="mr-2" /> },
  { href: '/recent', label: 'Recent', icon: <MdHistory size="24px" className="mr-2" /> },
] as const

const NavButton = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href} passHref>
    <div className="btn btn-ghost no-animation flex flex-row justify-start text-sm normal-case text-gray-400 transition-all hover:bg-transparent hover:text-gray-200 md:flex-col">
      {children}
    </div>
  </Link>
)

const Navbar = () => {
  const router = useRouter()

  return (
    <>
      <div className="sticky top-0 z-10 flex h-20 justify-center bg-black/80">
        <nav className="navbar max-w-7xl justify-between">
          <div className="w-1/2 justify-start">
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
          <Menu as="div" className="relative inline-block md:hidden">
            <Menu.Button className="inline-flex justify-center rounded-md px-4  py-2  text-gray-400 hover:text-gray-200 ">
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
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-lg bg-[#121212] py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {LINKS.map((link) => (
                  <Menu.Item
                    key={link.href}
                    as="div"
                    onClick={() => void router.push({ pathname: link.href })}
                  >
                    {({ active }) => (
                      <a
                        className={`text-md block cursor-pointer px-4 py-3 transition-all ${
                          active ? 'text-gray-200' : 'text-gray-400'
                        }`}
                      >
                        <div className="flex">
                          {link.icon}
                          {link.label}
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
      </div>
    </>
  )
}

export default Navbar
