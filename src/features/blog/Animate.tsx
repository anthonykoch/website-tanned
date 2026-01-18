'use client'

import { easeOutExpo } from '@/utils/animation'
import { animate } from 'motion/react'
import { useEffect } from 'react'

export const BlogPageAnimate = () => {
  useEffect(() => {
    let delay = 0.4

    animate(
      '.selector-title',
      { y: ['110%', '0%'], opacity: [0, 1] },
      { delay: delay, duration: 1.2, ease: easeOutExpo },
    )

    animate(
      '.selector-lead',
      { y: ['110%', '0%'], opacity: [0, 1] },
      { delay: (delay += 0.0), duration: 1.4, ease: easeOutExpo },
    )
  }, [])

  return null
}
