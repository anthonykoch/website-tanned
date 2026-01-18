'use client'

import { easeInOutCubic } from '@/utils/animation'
import { useAnimator } from '@/utils/animator'
import { theme } from '@/utils/theme'
import { animate } from 'motion/react'
import { useEffect, useRef } from 'react'
import { useRouterListener } from '../router/context/RouterComposerContext'
import { useHandleLinkClicks } from './hooks'

import ImageSplash from '@/images/actual/splash.jpg'

export const Sail = () => {
  const animator = useAnimator<'sail'>()
  const sail = useRef<HTMLDivElement>(null)

  return null

  // const router = useRouter()

  // useEffect(() => {
  //   router.beforePopState(({ url }) => {
  //     // Do your work here
  //     console.log('About to navigate back to:', url)

  //     // Perform async work if needed

  //     // Return true to allow navigation, false to prevent it
  //     return true
  //   })

  //   return () => {
  //     router.beforePopState(() => true)
  //   }
  // }, [router])

  useHandleLinkClicks()

  useRouterListener('before', async () => {
    if (!sail.current) return

    return animator
      .overwrite({
        sail: [
          animate(
            '.selector-sail-top',
            { clipPath: [`inset(0 0 100% 0)`, `inset(0 0 0% 0)`] },

            {
              duration: 0.5,
              // duration: 0.3,
              // delay: innerWidth < 720 ? 0.1 : 0,
              ease: easeInOutCubic,
            },
          ),
        ],
      })
      .wait()
  })

  useRouterListener('done', async () => {
    if (!sail.current) return

    return animator
      .overwrite({
        sail: [
          animate(
            sail.current,

            { clipPath: [`inset(0 0 0% 0)`, `inset(100% 0 0 0)`] },

            {
              delay:
                innerWidth < parseInt(theme('--breakpoint-lg')) ? 0.6 : 0.1,
              duration: 0.7,
              // duration: 0.44,
              // dration: 0.5,
              ease: easeInOutCubic,
            },
          ),
        ],
      })
      .wait()
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    animate(
      '#splash',
      {
        opacity: [1, 0],
      },
      {
        delay: 0.6,
        duration: 0.6,
        ease: 'linear',
      },
    )
  }, [])

  return (
    <>
      <div
        id="splash"
        ref={ref}
        style={{
          opacity: 1,
        }}
        className="bg-black w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform pointer-events-none"
      ></div>

      <div
        // data-c-sail
        ref={sail}
        className="selector-sail-top bg-white h-screen origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <div
          className="absolute left-0 top-0 size-full 
        "
        >
          {/* // #4f4550 */}
          {/* #a7b1a6 */}
          {/* #bec9bb */}

          <img
            src={ImageSplash.src}
            // src={ImageSplash1600w.src}
            // srcSet={`${ImageSplash800w.src} 800w, ${ImageSplash1200w.src} 1200w, ${ImageSplash1600w.src} 1600w, ${ImageSplash2000w.src} 2000w`}
            sizes="100vw"
            className="absolute size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
