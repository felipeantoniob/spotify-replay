import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Spinner from '../components/Spinner'
import { api } from '../utils/api'

const AppLogo = () => (
  <svg width="108" height="26" viewBox="0 0 108 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_10_1910)">
      <path
        d="M21.3559 0.503021H5.58431C2.91264 0.503021 0.746826 2.67313 0.746826 5.35009V21.1529C0.746826 23.8299 2.91264 26 5.58431 26H21.3559C24.0276 26 26.1934 23.8299 26.1934 21.1529V5.35009C26.1934 2.67313 24.0276 0.503021 21.3559 0.503021Z"
        fill="white"
      />
      <path
        d="M16.5134 6.23835C16.5114 6.14622 16.5351 6.05536 16.5816 5.97589C16.6282 5.89642 16.6959 5.83147 16.7771 5.78825H15.2848C13.6468 5.78825 12.3009 6.29972 11.2471 7.32267V6.62366C11.2484 6.40403 11.1629 6.19282 11.0092 6.03625C10.8555 5.87967 10.6461 5.7905 10.4269 5.78825H6.90475C6.68794 5.79004 6.48054 5.87724 6.32739 6.03102C6.17424 6.18479 6.08764 6.39278 6.0863 6.61002V20.7915C6.08851 21.0084 6.17539 21.2159 6.32836 21.3695C6.48132 21.5231 6.68821 21.6106 6.90475 21.6133H10.7315C10.9482 21.6106 11.1553 21.5232 11.3085 21.3696C11.4618 21.2161 11.549 21.0086 11.5517 20.7915V13.3086C11.5517 12.3993 11.7893 11.7049 12.2646 11.2252C12.7393 10.7495 13.4336 10.5092 14.3439 10.5092H16.6614C16.6136 10.4628 16.5758 10.4071 16.5503 10.3455C16.5249 10.2839 16.5123 10.2178 16.5134 10.1511V6.23835Z"
        fill="url(#paint0_linear_10_1910)"
      />
      <path
        d="M17.3216 5.52058V10.8928C17.3218 10.9549 17.3403 11.0156 17.3748 11.0672C17.4093 11.1188 17.4582 11.1591 17.5155 11.1829C17.5727 11.2068 17.6357 11.2132 17.6966 11.2013C17.7574 11.1894 17.8134 11.1598 17.8576 11.1161L20.7621 8.20411C20.7926 8.17347 20.8164 8.13684 20.8321 8.09653C20.8478 8.05621 20.855 8.01308 20.8532 7.96985C20.8514 7.92661 20.8408 7.88421 20.8219 7.84531C20.803 7.80641 20.7762 7.77184 20.7434 7.74379L17.8371 5.27678C17.7913 5.23781 17.7352 5.21289 17.6756 5.20501C17.616 5.19712 17.5554 5.20661 17.501 5.23232C17.4466 5.25803 17.4008 5.29889 17.369 5.35001C17.3371 5.40112 17.3207 5.46034 17.3216 5.52058Z"
        fill="url(#paint1_linear_10_1910)"
      />
      <path
        d="M41.1295 7.11126V10.9388H39.5097C38.031 10.9388 37.4117 11.5884 37.4117 13.1381V19.3133H33.2361V7.16923H36.0334L36.6851 8.51611C37.5359 7.52556 38.5806 7.11126 40.0235 7.11126H41.1295Z"
        fill="white"
      />
      <path
        d="M54.9971 13.1194C54.9949 13.4904 54.966 13.8608 54.9103 14.2276H45.9109C46.1831 15.6205 47.0662 16.3417 48.3849 16.3417C49.3599 16.3417 50.1749 15.9137 50.5765 15.2028H54.7317C53.8809 17.9733 51.4256 19.7055 48.3849 19.7055C44.6024 19.7055 41.8016 16.935 41.8016 13.2268C41.8016 9.5186 44.5803 6.76517 48.3849 6.76517C52.2985 6.76517 54.9971 9.55952 54.9971 13.1211V13.1194ZM45.9789 11.9106H50.8794C50.5135 10.6967 49.6389 10.0352 48.3798 10.0352C47.1683 10.0505 46.3226 10.7103 45.984 11.9259L45.9789 11.9106Z"
        fill="white"
      />
      <path
        d="M70.3399 13.2421C70.3399 17.0253 67.6906 19.7208 63.9846 19.7208C62.9422 19.73 61.9173 19.4516 61.0222 18.9161V23.6898H56.8977V7.15218H59.7376L60.26 8.11716C61.2937 7.22452 62.6166 6.73966 63.9812 6.75323C67.6838 6.77028 70.3399 9.45722 70.3399 13.2421ZM66.1388 13.2421C66.1388 11.648 64.9902 10.4631 63.4248 10.4631C61.8594 10.4631 60.7126 11.6566 60.7126 13.2421C60.7126 14.8277 61.8543 16.0177 63.418 16.0177C64.9817 16.0177 66.132 14.8362 66.132 13.2404L66.1388 13.2421Z"
        fill="white"
      />
      <path d="M72.2473 2.78249H76.4229V19.3201H72.2473V2.78249Z" fill="white" />
      <path
        d="M91.9495 7.15218V19.298H88.7166L88.3593 18.4455C87.3236 19.2809 86.0305 19.7299 84.701 19.7157C80.995 19.7157 78.3457 17.0066 78.3457 13.237C78.3457 9.46745 80.995 6.79926 84.701 6.79926C86.0501 6.78546 87.3612 7.2471 88.4052 8.10352L88.8391 7.15218H91.9495ZM87.9798 13.2387C87.9798 11.6617 86.8313 10.4785 85.2676 10.4785C83.7039 10.4785 82.5451 11.6617 82.5451 13.2387C82.5451 14.8158 83.6937 16.0075 85.2676 16.0075C86.8415 16.0075 87.9798 14.8243 87.9798 13.2387Z"
        fill="white"
      />
      <path
        d="M107.253 7.16923L102.174 18.7746C100.539 22.4913 99.0381 23.833 95.9072 23.833H94.4779V20.2391H95.6265C97.2242 20.2391 97.7058 19.8231 98.2707 18.3108L93.2614 7.16923H97.7994L100.372 13.8593L102.768 7.16923H107.253Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_10_1910"
        x1="18.2064"
        y1="8.27401"
        x2="3.59613"
        y2="16.6917"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E3192" />
        <stop offset="0.15" stopColor="#3C2C9B" />
        <stop offset="0.43" stopColor="#621FB4" />
        <stop offset="0.81" stopColor="#9F0BDB" />
        <stop offset="1" stopColor="#C000F0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10_1910"
        x1="20.1836"
        y1="6.73448"
        x2="16.198"
        y2="9.02928"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E3192" />
        <stop offset="0.15" stopColor="#3C2C9B" />
        <stop offset="0.43" stopColor="#621FB4" />
        <stop offset="0.81" stopColor="#9F0BDB" />
        <stop offset="1" stopColor="#C000F0" />
      </linearGradient>
      <clipPath id="clip0_10_1910">
        <rect
          width="106.506"
          height="25.497"
          fill="white"
          transform="translate(0.746826 0.503021)"
        />
      </clipPath>
    </defs>
  </svg>
)

const queryOptions = {
  keepPreviousData: true,
  refetchOnWindowFocus: false,
}

let userInfo: SpotifyApi.CurrentUsersProfileResponse

const Profile = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      void router.push('/')
    },
  })
  const userInfoQuery = api.spotify.getUserInfo.useQuery(undefined, queryOptions)

  if (userInfoQuery.isLoading)
    return (
      <div className="h-screen grid place-items-center">
        <Spinner />
      </div>
    )

  if (userInfoQuery.isError) {
    void signOut()
    void router.push('/')
  }

  if (userInfoQuery.data) {
    userInfo = userInfoQuery.data.body
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col text-center mt-16">
        <div className="flex flex-row items-center flex-wrap justify-center gap-x-2">
          <h1 className="text-2xl">Welcome to</h1>
          <AppLogo />
          <h1 className="text-2xl">{userInfo.display_name}!</h1>
        </div>
        <div className="flex justify-center relative self-center mt-12">
          <Image
            className="rounded-full aspect-square z-10"
            src={userInfo.images && userInfo.images[0] ? userInfo.images[0].url : ''}
            alt={userInfo.display_name ?? 'username'}
            height={160}
            width={160}
          />
          <div className="bg-black absolute top-2 left-2 w-40 h-40 rounded-full opacity-25" />
        </div>
        <div className="text-center text-lg mt-12">
          <p>
            <span className="font-bold">Recap</span> songs
          </p>
          <p>
            <span className="font-bold">Recreate</span> playlists
          </p>
          <p>
            <span className="font-bold">Rediscover</span> yourself
          </p>
        </div>
        <Link
          className="mt-24 border-white border-[1px] rounded-[48px] h-12 font-bold text-sm max-w-sm mx-auto px-24 hover:opacity-75 transition-all items-center justify-center flex flex-row"
          href="/tracks"
        >
          CHECK YOUR REPLAY
        </Link>
        <button
          className="font-bold text-sm mt-16 hover:opacity-75 transition-all"
          onClick={() => void signOut()}
        >
          LOG OUT
        </button>
      </div>
    </div>
  )
}

export default Profile
