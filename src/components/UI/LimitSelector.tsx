import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useBoundStore } from '../../store'
import { Icon } from './Icon'

const LimitSelector = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const limit = useBoundStore((state) => state.limit)
  const setLimit = useBoundStore((state) => state.setLimit)

  return (
    <div className="relative">
      <button className="px-3 py-1" onClick={() => setIsDropdownVisible(true)}>
        <Icon id="three-dots-vertical" width="4" height="17" />
      </button>
      {isDropdownVisible && (
        <div>
          <div className="fixed inset-0" onClick={() => setIsDropdownVisible(false)} />
          <div className="absolute right-0 top-8 z-10 rounded-md bg-on-primary-container text-on-primary shadow-xl">
            <p className="select-none px-2 py-1">Show</p>
            {[10, 25, 50].map((value) => (
              <button
                key={value}
                onClick={() => {
                  setLimit(value)
                  setIsDropdownVisible(false)
                }}
                className={twMerge(
                  'w-full px-2 py-1 text-right transition-all',
                  limit === value && 'bg-on-primary text-on-primary-container'
                )}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LimitSelector
