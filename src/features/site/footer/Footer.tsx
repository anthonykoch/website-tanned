'use client'

import { ExternalLink } from '@/components/action/Link'
import { scrollTo } from '@/utils/dom'
import { Link, useLocation } from '@tanstack/react-router'
import React from 'react'

export const Footer: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <footer className="max-w-[1728px] mx-auto px-4">
      <div className="border-b border-black/10 w-[calc(100wh-16px)]"></div>

      {/* <div className="pb-10 lg:pb-20" /> */}
      <div className="pb-6" />

      <div className="">
        <div>
          <div id="contact"></div>

          <span className="text-[14px] xl:text-[22px] leading-[0.9] font-400 mb-6 block">
            Let’s collaborate, or just chat.
          </span>
          <a
            href="mailto:hello@anthonykoch.com"
            className="text-inherit block hover:bg-primary-500 hover:shadow-box transition-all duration-150"
          >
            <span className="block font-500 xl:text-left text-[26px] md:text-[40px] lg:text-6xl xl:text-7xl 2xl:text-8xl xl:pb-4">
              <span
                className="text-black hover:active:text-black 
                  block lg:block  
                  py-3 md:py-5 lg:py-12 px-6 font-500 -tracking-wide font-heading
                  transition-all duration-200"
                // className="text-black bg-primary-500 hover:active:text-black
                //   block lg:block
                //   py-3 md:py-5 lg:py-12 px-6 font-500 -tracking-wide font-heading
                //   transition-all duration-200 shadow-button"
              >
                hello@anthonykoch.com
              </span>
            </span>
          </a>

          <div className="md:flex items-center lg:items-baseline justify-between pt-2 lg:pl-6 w-full">
            <div className="flex-1">
              <nav className="flex lg:justify-between gap-x-8 w-full">
                <ul className="lg:flex flex-wrap lg:flex-nowrap items-baseline  justify-between md:justify-start md:gap-y-3 gap-x-8 *:text-black/80">
                  <li>
                    <ExternalLink
                      href="https://x.com/anthkoch"
                      className="hover:text-zinc-400 block text-inherit font-display font-600 text-[15px] py-2 px-4 tracking-widest"
                    >
                      Twitter
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      href="https://codepen.io/anthonykoch/"
                      className="hover:text-zinc-400 block text-inherit font-display font-600 text-[15px] py-2 px-4 tracking-widest"
                    >
                      Codepen
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      href="https://github.com/anthonykoch?tab=repositories"
                      className="hover:text-zinc-400 block text-inherit font-display font-600 text-[15px] py-2 px-4 tracking-widest"
                    >
                      Github
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      href="https://www.linkedin.com/in/anthony-koch-794a3b15b/"
                      className="hover:text-zinc-400 block text-inherit font-display font-600 text-[15px] py-2 px-4 tracking-widest"
                    >
                      LinkedIn
                    </ExternalLink>
                  </li>
                </ul>
                <ul className="lg:flex flex-nowrap lg:flex-wrap items-baseline  justify-between md:justify-start md:gap-y-3 gap-x-8 *:text-black/80">
                  <li>
                    <Link
                      to="/blog"
                      className="hover:text-zinc-400 block text-inherit font-display font-600 text-[15px] py-2 px-4 tracking-widest"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#work"
                      onClickCapture={(e) => {
                        if (pathname === '/') {
                          e.preventDefault()
                          scrollTo('#work')
                        }
                      }}
                      className="hover:text-zinc-400 block text-inherit font-display font-600 text-[15px] py-2 px-4 tracking-widest"
                    >
                      Work
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:pl-8">
              <p className="text-black/60  font-display font-600 text-[15px] py-2 px-4 tracking-widest">
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10" />
    </footer>
  )
}

// <div className="hidden">
//               <div className="pt-5 **:[a]:text-black/50">
//                 <p>
//                   Fonts:{' '}
//                   <ExternalLink href="https://fortfoundry.com/fonts/rift">
//                     Rift Soft
//                   </ExternalLink>
//                   ,{' '}
//                   <ExternalLink href="https://connary.com/fonts/visby/">
//                     Visby CF
//                   </ExternalLink>
//                   ,{' '}
//                   <ExternalLink href="https://fonts.google.com/specimen/DM+Sans">
//                     DM Sans
//                   </ExternalLink>
//                 </p>
//               </div>
//               <div className="**:[span]:text-black/50">
//                 <p>
//                   Stack: <span>Next.js</span>, <span>Tailwind</span>,
//                   motion.dev
//                 </p>
//               </div>
//             </div>
