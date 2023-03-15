import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useBoundStore } from '../../store'
import { ThreeDotsVerticalIcon } from './Icons'

const LimitSelector = () => {
  const [parent] = useAutoAnimate({ duration: 300 })
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const limit = useBoundStore((state) => state.limit)
  const setLimit = useBoundStore((state) => state.setLimit)

  return (
    <div className="relative">
      <button className="px-3 py-1" onClick={() => setIsDropdownVisible(true)}>
        <ThreeDotsVerticalIcon />
      </button>
      {isDropdownVisible && (
        <div ref={parent}>
          <div className="fixed inset-0" onClick={() => setIsDropdownVisible(false)} />
          <div className="absolute top-2 right-0 z-10 rounded-md bg-on-primary-container text-on-primary shadow-xl">
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
