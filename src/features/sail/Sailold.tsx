import { easeOutCubic, easeOutExpo } from '@/utils/animation'
import { useAnimator } from '@/utils/animator'
import { useAnimate } from 'motion/react'
import { useRouterListener } from '../router/context/RouterComposerContext'
import { useHandleLinkClicks } from './hooks'

export const Sail = () => {
  const [scope, animate] = useAnimate()
  const animator = useAnimator<'sail'>()

  useHandleLinkClicks()

  useRouterListener('before', async () => {
    // return Promise.resolve()
    return animator
      .overwrite({
        sail: [
          await animate(
            '.selector-sail-top,.selector-sail-bottom',
            { opacity: 1 },
            { duration: 0 },
          ),
          animate(
            '.selector-sail-top',
            { scaleY: [0, 1] },
            {
              duration: 1,
              ease: easeOutExpo,
            },
          ),
          animate(
            '.selector-sail-bottom',
            { scaleY: [0, 1] },
            {
              duration: 1,
              ease: easeOutExpo,
            },
          ),
        ],
      })
      .wait()
    // return animator
    //   .overwrite({
    //     sail: [
    //       await animate(
    //         '.selector-sail',
    //         { opacity: [0, 1] },
    //         {
    //           duration: 0.2,
    //           ease: 'linear',
    //         },
    //       ),
    //     ],
    //   })
    //   .wait()
  })

  useRouterListener('done', async () => {
    // return Promise.resolve()
    return animator
      .overwrite({
        sail: [
          // await animate(
          //   '.selector-sail-bottom',
          //   { opacity: 1 },
          //   { duration: 0 },
          // ),
          animate(
            '.selector-sail-top',
            { opacity: [1, 0] },
            // { opacity: 1, scaleY: [1, 0] },
            {
              duration: 1,
              ease: easeOutExpo,
            },
          ),

          animate(
            '.selector-sail-bottom',
            { opacity: [1, 0] },
            // { scaleY: [1, 0] },
            {
              duration: 1,
              ease: easeOutExpo,
            },
          ),
        ],
      })
      .wait()
    // return animator
    //   .overwrite({
    //     sail: [
    //       animate(
    //         '.selector-sail',
    //         { opacity: [1, 0] },
    //         {
    //           duration: 0.2,
    //           ease: 'linear',
    //           // duration: 0.3,
    //           // ease: 'linear',
    //         },
    //       ),
    //     ],
    //   })
    //   .wait()
  })

  return (
    <div data-c-sail ref={scope}>
      {/* <div
        // className="selector-sail bg-black origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        className="selector-sail bg-[#222224] origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // className="selector-sail bg-white size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // className="selector-sail bg-[#eaeaea] size-full fixed top-0 left-0 z-3000 pointer-events-none"
        style={{ opacity: 0 }}
      /> */}

      <div
        className="selector-sail-top bg-[#2b292b] lg:h-[50vh] xl:h-[60vh] origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // className="selector-sail-top bg-[#222224] lg:h-[50vh] xl:h-[60vh] origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // style={{ opacity: 0 }}
        style={{ transform: 'scaleY(0)' }}
      />
      <div
        className="selector-sail-bottom bg-white lg:h-[50vh] xl:h-[40vh] origin-bottom size-full fixed top-[50vh] xl:top-[60vh] left-0 z-3000 pointer-events-none"
        style={{ transform: 'scaleY(0)' }}
        // style={{ opacity: 0 }}
      />
    </div>
  )
}
