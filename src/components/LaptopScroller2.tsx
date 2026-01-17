import ImageOpalcameraHomeFull1000w from '@/public/actual/opalcamera-home-full-1000w.jpg'
import ImageOpalcameraHomeFull1800w from '@/public/actual/opalcamera-home-full-1800w.jpg'
import ImageOpalcameraHomeFull750w from '@/public/actual/opalcamera-home-full-750w.jpg'
import ImageEmptyMacbook from '@/public/final-compressed/empty-macbook.png'
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react'
import { FC, useRef } from 'react'

export const LaptopScroller2: FC<{ y: MotionValue }> = ({ y }) => {
  // const opalcameraHomeImageRef = useRef<HTMLImageElement>(null)
  // const opalcameraHomeImageScrollable = useRef<HTMLDivElement>(null)

  // const opalCameraMacbookScroll = useScroll({
  //   target: opalcameraHomeImageScrollable,
  //   offset: ['start -10vw', 'end 50vw'],
  // })

  // const homeImageYRemap = useTransform(
  //   opalCameraMacbookScroll.scrollYProgress,
  //   [0, 1],
  //   [0, -64],
  // )

  // const homeImageY = useMotionTemplate`${homeImageYRemap}%`

  return (
    <div className="relative">
      {/* <div className="relative h-[calc(1700px+100vh)] lg:h-[calc(2200px+100vh)] -mb-[65vh]"> */}
      <div
        // ref={opalcameraHomeImageScrollable}
        className="absolute top-0 left-0 size-full"
      />

      <div className="sticky top-[30vh] lg:top-[10vh] left-0 ">
        <div>
          <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide text-center">
            Latest LANDING PAGE
          </p>
        </div>
        <div>
          <motion.div className="relative z-10 will-change-transform">
            <img
              src={ImageEmptyMacbook.src}
              className="w-full mx-auto absolute z-20 top-0 left-1/2 -translate-x-1/2"
              // className="w-full max-w-[800px] xl:max-w-[1200px] mx-auto absolute z-20 top-0 left-1/2 -translate-x-1/2"
            />

            <div className="w-full mx-auto">
            {/* <div className="max-w-[800px] xl:max-w-[1200px] w-full mx-auto"> */}
              <div className="aspect-1000/570 relative  pt-[6%]">
                <div className="overflow-hidden w-full max-w-[71.5%] aspect-640/400 z-40 relative left-[14%] ">
                  <div className="striped z-10 absolute size-full">
                    <span className="absolute top-1/2 left-1/2 -translate-1/2 text-[14px] text-white/90 bg-black py-2 px-4 font-display tracking-wider uppercase font-600">
                      Loading...
                    </span>
                  </div>
                  <motion.img
                    src={ImageOpalcameraHomeFull1000w.src}
                    srcSet={`${ImageOpalcameraHomeFull750w.src} 750w, ${ImageOpalcameraHomeFull1000w.src} 1000w, ${ImageOpalcameraHomeFull1800w.src} 1800w`}
                    sizes="(max-width: 400px) 90vw, (max-width: 800px) 800px, 1200px"
                    className="absolute top-0 left-0 w-full h-auto will-change-transform object-top z-20"
                    loading="lazy"
                    // ref={opalcameraHomeImageRef}
                    // style={{ y: homeImageY }}
                    style={{ y }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
