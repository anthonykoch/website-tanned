import { useMotionValue, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef } from 'react'
import { useWindowEvent } from './use-window-event'

export const useScrollDelta = () => {
  const { scrollY } = useScroll()

  const delta = useMotionValue(
    typeof window !== 'undefined' ? window.scrollY : 0,
  )
  const last = useRef(typeof window !== 'undefined' ? window.scrollY : 0)

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (y === last.current) return

    delta.set(y < last.current ? -1 : 1)
    last.current = y
  })

  return delta
}
