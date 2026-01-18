import { frame, useMotionValue, useTransform } from 'motion/react'
import { useEffect } from 'react'

export function usePointerProgress() {
  const initialX = useMotionValue(0)
  const initialY = useMotionValue(0)

  const x = useTransform(
    initialX,
    [0, typeof window === 'undefined' ? 0 : window.innerHeight],
    [0, 1],
  )

  const y = useTransform(
    initialY,
    [0, typeof window === 'undefined' ? 0 : window.innerWidth],
    [0, 1],
  )

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        initialX.set(clientX)
        initialY.set(clientY)
      })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return { x, y }
}
