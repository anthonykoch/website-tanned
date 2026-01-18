'use client'

import { scrollTo } from '@/utils/dom'
import { Link, useLocation } from '@tanstack/react-router'
import { default as classNames, default as cx } from 'classnames'
import * as React from 'react'

export const Navigation: React.FC<{
  isBlendModeDifference?: boolean
  colorVariant?: 'white' | 'black'
}> = ({ colorVariant }) => {
  // }> = ({ colorVariant, isBlendModeDifference = false }) => {
  const { pathname } = useLocation()

  return (
    <nav>
      <div className="inline-flex list-none *:relative">
        <li className="hidden xl:block">
          <Link to="/blog">
            <MenuItemAppearance colorVariant={colorVariant}>
              Blog
            </MenuItemAppearance>
          </Link>
        </li>
        <li className="hidden xl:block">
          <Link
            to="/#work"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollTo('#work')
              }
            }}
          >
            <MenuItemAppearance colorVariant={colorVariant}>
              Work
            </MenuItemAppearance>
          </Link>
        </li>
        <li className="hidden xl:block">
          <Link
            to="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#contact')
            }}
          >
            <MenuItemAppearance colorVariant={colorVariant}>
              Contact
            </MenuItemAppearance>
          </Link>
        </li>

        <li className="hidden xl:block">
          <a
            href="https://github.com/anthonykoch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={cx('leading-none block w-[54px] h-[60px]')}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="absolute-center leading-0 w-[26px] fill-[#ddd]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
            </svg>
          </a>
        </li>
      </div>
    </nav>
  )
}

const MenuItemAppearance: React.FC<{
  children?: React.ReactNode
  colorVariant?: 'white' | 'black'
}> = ({ children, colorVariant }) => {
  const { pathname } = useLocation()
  const isNotHome = pathname !== '/'

  return (
    <span
      className={classNames(
        `h-[60px] px-12 flex items-center justify-center hover:shadow-box
                tracking-widest text-[15px] font-600 uppercase font-display
              `,
        {
          'hover:bg-primary-500 hover:text-black hover:shadow-button hover:shadow-black/10':
            isNotHome,
          'hover:bg-primary-invert hover:shadow-white/20': !isNotHome,
          // 'hover:bg-primary-500 hover:text-black hover:shadow-button hover:shadow-black/10':
          //   !isBlendModeDifference,
          // 'hover:bg-primary-invert hover:shadow-white/20':
          //   isBlendModeDifference,
          'text-black/80': colorVariant === 'black',
          'text-white/80': colorVariant === 'white',
        },
      )}
    >
      {children}
    </span>
  )
}
