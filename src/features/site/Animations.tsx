'use client'

import { useScrollDelta } from '@/hooks/use-scroll-delta'
import { useEffect } from 'react'

export const Animations = () => {
  const scrollDirection = useScrollDelta(50)

  useEffect(() => {
    if (document.querySelector('.qawd')) {
      
    }
  }, [scrollDirection])

  return null
}
