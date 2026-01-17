import { useCallback, useEffect, useRef, useState } from 'react'
import { BillboardGrid } from './Billboard'
import {
  frame,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { easeInQuart, easeOutExpo } from '@/utils/animation'
import { useWindowEvent } from '@/hooks/use-window-event'
import { debounce } from 'lodash'
import ImageOpalFirst1_1000w from '@/public/actual/opal-first-1_1000w.jpg'
import ImageOpalFirst1_1500w from '@/public/actual/opal-first-1_1500w.jpg'
import ImageOpalFirst1_2200w from '@/public/actual/opal-first-1_2200w.jpg'
import ImageOpalFirst1_3000w from '@/public/actual/opal-first-1_3000w.jpg'
import ImageOpalFirst2_1000w from '@/public/actual/opal-first-2_1000w.jpg'
import ImageOpalFirst2_1500w from '@/public/actual/opal-first-2_1500w.jpg'
import ImageOpalFirst2_2200w from '@/public/actual/opal-first-2_2200w.jpg'
import ImageOpalFirst2_3000w from '@/public/actual/opal-first-2_3000w.jpg'
import { getOffset } from '@/utils/dom'

export const OpalFirst = () => {
  const target = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end end'],
  })

  const clipPathTransform = useTransform(scrollYProgress, [0, 1], [100, 0], {
    ease: easeInQuart,
  })
  const clipPath = useMotionTemplate`inset(0 0 0 ${clipPathTransform}%)`

  const scaleRef = useRef<HTMLDivElement>(null)

  const scaleScroll = useScroll({
    target: scaleRef,
    offset: ['start end', 'end end'],
  })

  const [calculatedScale, setCalculatedScale] = useState(1)

  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(
    scaleScroll.scrollYProgress,
    [0, 1],
    [1, calculatedScale],
  )

  const left = useRef<HTMLDivElement>(null)

  const updateScale = useCallback(() => {
    if (!container.current || !left.current) return

    let scale = 1

    if (innerWidth < 760) {
      scale = (innerWidth - 32) / innerWidth
    } else if (innerWidth < 1200) {
      scale = (innerWidth - 100) / innerWidth
    } else {
      scale = (innerWidth - getOffset(left.current).left * 2) / innerWidth
    }

    setCalculatedScale(scale)
  }, [])

  const img = useRef<HTMLImageElement>(null)
  const bg = useRef<HTMLImageElement>(null)
  const compare = useRef<HTMLDivElement>(null)

  const [top, setTop] = useState(0)

  const updateTop = useCallback(() => {
    if (!img.current) return

    const calc =
      innerHeight / 2 -
      img.current.offsetHeight / 2 -
      (innerWidth < 700 ? innerHeight * 0.05 : 0)

    setTop(calc)
  }, [])

  const [bgHeight, setBgHeight] = useState(400)

  const updateBgDimension = useCallback(() => {
    if (bg.current) {
      bg.current.offsetHeight
      setBgHeight(bg.current.offsetHeight)
    }
  }, [])

  const update = useCallback(() => {
    updateScale()
    updateTop()
    updateBgDimension()
  }, [updateScale, updateTop])

  useEffect(() => {
    update()
  }, [update, calculatedScale])

  useWindowEvent(
    'resize',
    debounce(
      () => {
        update()
      },
      100,
      { maxWait: 100 },
    ),
  )

  return (
    <div>
      <div className="pb-40 lg:pb-40" />
      <div className="relative max-w-site mx-auto">
        <BillboardGrid>
          <div ref={left} />
          <p className="copy-largest">
            My journey at Opal started <br className="hidden lg:block" />
            with a simple landing page
          </p>
          <div className="pb-4 lg:pb-10"></div>
          <p className="text-black/60 text-[16px] lg:text-[18px] font-body font-500 tracking-tight">
            The page was a simple teaser, letting everyone know what's coming.
          </p>
        </BillboardGrid>
        <div className="pb-10 lg:pb-10"></div>
      </div>

      <div
        className="relative max-w-site mx-auto"
        style={{ ['--bg-height' as any]: `${bgHeight}px` }}
      >
        <div className="h-[calc(150vh+(var(--bg-height)/2))] lg:h-[calc(270vh+(var(--bg-height)/2))] absolute top-0 left-0 w-full">
          <div className=" sticky top-[0vh] w-full " style={{ top }}>
            {/* <div className="overflow-hidden"> */}
            {/* <div className="max-w-[90vw]"> */}
            {/* <img
                  src="/actual/first-bg.png"
                  className=" lg:block w-full z-10 object-contain relative translate-x-[3vw] translate-y-[-10vh]"
                  // className=" lg:block w-full  z-10 translate-y-[0vh] lg:translate-y-[20vh] object-contain"
                  ref={bg}
                /> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="h-[150vh] lg:h-[270vh] relative z-20" ref={compare}>
          <div
            ref={target}
            className="h-[90%] absolute top-[10%] z-1000 w-full pointer-events-none"
          />
          <div
            ref={scaleRef}
            className="h-[44%] absolute top-[23%] z-1000 w-full pointer-events-none"
          />
          <div className="sticky top-0 overflow-hidden" style={{ top }}>
            <motion.div style={{ scale }}>
              <div className="relative aspect-1648/949 w-full" ref={container}>
                <motion.div className="will-change-transform size-full">
                  <motion.img
                    src={ImageOpalFirst2_1500w.src}
                    srcSet={`${ImageOpalFirst2_1000w.src} 1000w, ${ImageOpalFirst2_1500w.src} 1500w, ${ImageOpalFirst2_2200w.src} 2200w, ${ImageOpalFirst2_3000w.src} 3000w`}
                    sizes="100vw"
                    className="absolute left-0 size-full z-20 will-change-[clip-path]"
                    style={{ clipPath }}
                  />
                  <motion.img
                    src={ImageOpalFirst1_1500w.src}
                    srcSet={`${ImageOpalFirst1_1000w.src} 1000w, ${ImageOpalFirst1_1500w.src} 1500w, ${ImageOpalFirst1_2200w.src} 2200w, ${ImageOpalFirst1_3000w.src} 3000w`}
                    sizes="100vw"
                    className="absolute left-0 size-full z-10"
                    ref={img}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
