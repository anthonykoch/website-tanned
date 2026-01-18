'use client'

import classNames from 'classnames'
import { FC } from 'react'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Link, useLocation } from '@tanstack/react-router'

export const SiteNavigation: FC<{
  isBlendModeDifference?: boolean
  colorVariant?: 'black' | 'white'
}> = ({ colorVariant = 'black', isBlendModeDifference }) => {
  const location = useLocation()
  const isNotHome = location.pathname !== '/'

  return (
    <div
      className="flex items-start justify-between w-full z-900"
      role="banner"
    >
      <Link
        to="/"
        className={classNames(
          'h-[60px] flex items-center transition-colors duration-200 hover:shadow-box',
          {
            'hover:bg-primary-500 hover:text-black hover:shadow-button hover:shadow-black/10':
              isNotHome,
            'hover:bg-primary-invert hover:shadow-white/20': !isNotHome,

            // 'active:bg-primary-500 hover:bg-primary-500 hover:text-black active:shadow-button hover:shadow-button hover:shadow-black/10':
            //   !isBlendModeDifference,
            // 'hover:bg-primary-invert active:shadow-white/20 hover:shadow-white/20':
            //   isBlendModeDifference,
            'text-black/80': colorVariant === 'black',
            'text-white/80': colorVariant === 'white',
          },
        )}
      >
        <Logo />
      </Link>

      <Navigation
        isBlendModeDifference={isBlendModeDifference}
        colorVariant={colorVariant}
      />
    </div>
  )
}
