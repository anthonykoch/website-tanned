'use client'

import { ExternalLink } from '@/components/action/Link'
import { isMobileMenuVisible } from '@/store'
import { easeOutCubic, easeOutExpo } from '@/utils/animation'
import { scrollTo } from '@/utils/dom'
import { Portal } from '@radix-ui/react-portal'
import { Link, useLocation } from '@tanstack/react-router'
import classNames from 'classnames'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { AnimatePresence, motion, useAnimate, usePresence } from 'motion/react'
import { FC, ReactNode, useEffect, useRef } from 'react'
import FocusLock from 'react-focus-lock'

export const MobileNavigation = () => {
  const [isVisible, setVisible] = useAtom(isMobileMenuVisible)

  return (
    <Portal>
      <AnimatePresence>
        {isVisible && (
          // <RemoveScroll>
          <FocusLock>
            <div
              key="mobile-nav"
              id="mobile-navigation"
              className="xl:hidden fixed flex justify-end z-2000 left-0 top-0 size-full"
            >
              <div className="w-full min-[500px]:w-[290px] max-w-full relative">
                <MobileNavOverlay />
                <div className="w-[calc(100%-60px)] pt-[30px] mx-auto relative text-center">
                  <div className="relative">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1],
                        transition: {
                          opacity: {
                            ease: easeOutExpo,
                            duration: 1.2,
                            delay: 0.2,
                          },
                        },
                      }}
                      exit={{
                        opacity: [1, 0],
                        transition: {
                          opacity: {
                            ease: easeOutCubic,
                          },
                          duration: 0.3,
                        },
                      }}
                      type="button"
                      onClick={() => setVisible((bool) => !bool)}
                      aria-label="Open navigation menu"
                      aria-expanded="false"
                      aria-controls="mobile-navigation"
                      className={classNames(
                        'w-full',
                        // 'w-[120px]',
                        `ml-auto appearance-none cursor-pointer h-[60px] 
                      flex items-center justify-center xl:hidden
                      tracking-widest text-[15px] font-600 uppercase font-display
            
                      hover:shadow-button`,
                        {
                          'bg-black text-white hover:bg-primary-500 hover:text-black':
                            isVisible,
                          'text-white hover:bg-primary-500': !isVisible,
                        },
                      )}
                    >
                      Close
                    </motion.button>
                    <Links />
                  </div>
                </div>
              </div>
            </div>
          </FocusLock>
        )}
        {/* </RemoveScroll> */}
      </AnimatePresence>
    </Portal>
  )
}

const Text: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="selector-text tracking-widest text-[15px] font-600 uppercase font-display leading-none overflow-clip">
      <span className="block will-change-transform">{children}</span>
    </div>
  )
}

const Appearance: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="text-black relative block py-5 px-3 active:bg-primary-500 hover:bg-primary-500 hover:shadow-box transition-colors duration-100 hover:text-black">
      {children}
    </span>
  )
}

const MobileNavOverlay = () => {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  const hasAnimatedIn = useRef(false)
  const hasAnimatedOut = useRef(false)

  useEffect(() => {
    ;(async () => {
      if (isPresent) {
        if (!hasAnimatedIn.current) {
          hasAnimatedIn.current = true
          animate(
            'div',
            {
              scaleY: [0.92, 1],
              scaleX: [0.92, 1],
            },
            {
              delay: 0,
              ease: easeOutExpo,
              duration: 0.6,
            },
          )
        }
      } else {
        hasAnimatedOut.current = true
        if (hasAnimatedOut) {
          await animate(
            'div',
            {
              opacity: [1, 0],
            },
            {
              delay: 0.12,
              ease: easeOutCubic,
              duration: 0.3,
            },
          )
          safeToRemove()
        }
      }
    })()
  }, [isPresent])

  return (
    <div ref={scope}>
      <div
        style={{ boxShadow: '-20px 0 40px -3px rgba(0,0,0,0.1)' }}
        className="h-full w-full origin-center bg-white absolute top-0 right-0"
      />
    </div>
  )
}

const Links = () => {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  const hasAnimatedIn = useRef(false)
  const hasAnimatedOut = useRef(false)

  const setVisible = useSetAtom(isMobileMenuVisible)

  useEffect(() => {
    ;(async () => {
      if (isPresent) {
        if (!hasAnimatedIn.current) {
          hasAnimatedIn.current = true
          await animate(
            'a',
            { opacity: [0, 1] },
            {
              delay: 0.2,
              ease: easeOutExpo,
              duration: 1,
            },
          )
          hasAnimatedIn.current = false
        }
      } else {
        hasAnimatedOut.current = true

        if (hasAnimatedOut) {
          await animate(
            'a',
            { opacity: [1, 0] },
            {
              delay: 0,
              ease: easeOutCubic,
              duration: 0.3,
            },
          )
          safeToRemove()
          hasAnimatedOut.current = false
        }
      }
    })()
  }, [isPresent])

  // const router = useRouter()

  const isMobileMenuVisibleAtom = useAtomValue(isMobileMenuVisible)

  const { pathname } = useLocation()

  return (
    <div ref={scope}>
      <Link
        onClick={() => {
          setVisible(false)
        }}
        className="block will-change-[opacity]"
        to="/blog"
      >
        <Appearance>
          <Text>Blog</Text>
        </Appearance>
      </Link>
      <Link
        onClick={(e) => {
          if (pathname === '/') {
            e.preventDefault()
            scrollTo('#work')
          }

          setVisible(false)
        }}
        className="block will-change-[opacity]"
        to="/#work"
      >
        <Appearance>
          <Text>Work</Text>
        </Appearance>
      </Link>

      <Link
        onClick={(e) => {
          e.preventDefault()
          scrollTo('#contact')
          setVisible(false)
        }}
        className="block will-change-[opacity]"
        to="#contact"
      >
        <Appearance>
          <Text>Contact</Text>
        </Appearance>
      </Link>

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: [0, 1],
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: easeOutExpo,
          },
        }}
        exit={{
          scaleX: [1, 0],
          opacity: [1, 0],
          transition: {
            opacity: {
              delay: 0.1,
            },
            delay: 0,
            duration: 0.3,
            ease: easeOutCubic,
          },
        }}
        className="selector-line origin-top  h-px w-full bg-black/15"
      />

      <ExternalLink
        className="block will-change-[opacity]"
        href="https://github.com/anthonykoch?tab=repositories"
      >
        <Appearance>
          <Text>Github</Text>
        </Appearance>
      </ExternalLink>
      <ExternalLink
        className="block will-change-[opacity]"
        href="https://x.com/"
      >
        <Appearance>
          <Text>@anthkoch</Text>
        </Appearance>
      </ExternalLink>
    </div>
  )
}

{
  /* <span
                className="block will-change-transform"
                // initial={{ y: ['110%', '0%'] }}
                // initial={{ opacity: 0 }}
                // animate={{
                //   // y: ['110%', '0%'],
                //   opacity: [0, 1],
                //   transition: {
                //     delay: 0.2 + i * 0.06,
                //     duration: 1,
                //     ease: easeOutExpo,
                //   },
                // }}
                // exit={{
                //   opacity: [1, 0],
                //   // y: ['0%', '-110%'],
                //   transition: {
                //     delay: (list.length - i) * 0.05,
                //     duration: 0.3,
                //     ease: easeOutExpo,
                //   },
                // }}
                // transition={{
                //   duration: 1,
                //   ease: easeOutExpo,
                //   // delay: 0.3 + i * 0.06,
                // }}
              >
                {text}
              </span> */
}
