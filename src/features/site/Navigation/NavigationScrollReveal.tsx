'use client'

import { useScrollDelta } from '@/hooks/use-scroll-delta'
import { isMobileMenuVisible } from '@/store'
import { theme } from '@/utils/theme'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import { useMotionValueEvent } from 'motion/react'
import { FC, ReactNode, useState } from 'react'

export const NavigationScrollReveal: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const delta = useScrollDelta()
  const [isRetracted, setIsRetracted] = useState(false)
  const isVisible = useAtomValue(isMobileMenuVisible)

  useMotionValueEvent(delta, 'change', (d) => {
    if (d > 0 && scrollY > 0) {
      if (!isRetracted) {
        setIsRetracted(true)
      }
    } else {
      if (isRetracted) {
        setIsRetracted(false)
      }
    }

    if (
      typeof window !== 'undefined' &&
      innerWidth < parseInt(theme('--breakpoint-xl'))
    ) {
    }
  })

  return (
    <div
      className={classNames('duration-400 ease-out-expo transition-transform', {
        '-translate-y-full': isRetracted && !isVisible,
      })}
    >
      {children}
    </div>
  )
}
