import { useRouter } from 'next/router'

import { Icon } from './Icon'
import LimitSelector from './LimitSelector'
import TimeRangeButtons from './TimeRangeButtons'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter()

  return (
    <div className="items-left mx-4 mb-8 flex flex-col justify-between pt-8">
      <Icon id="replay" width="70" height="24" />
      <h1 className="mt-4 font-sans text-lg font-bold text-white">{title}</h1>
      <div className="mt-4 flex flex-row items-center">
        <TimeRangeButtons />
        {!['/genres'].includes(router.pathname) && (
          <div className="ml-auto">
            <LimitSelector />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
