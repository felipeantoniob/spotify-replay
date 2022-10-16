import { useEffect, useState } from 'react'

const useVisibleOnScroll = (yOffset: number) => {
  const [isVisibleOnScroll, setIsVisibleOnScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > yOffset) {
        setIsVisibleOnScroll(true)
      } else {
        setIsVisibleOnScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [yOffset])

  return { isVisibleOnScroll }
}

export default useVisibleOnScroll
