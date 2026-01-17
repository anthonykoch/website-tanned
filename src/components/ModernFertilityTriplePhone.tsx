import ImagePhoneMfDashboardPlan1300w from '@/public/actual/phone-mf-dashboard-plan_1300w.png'
import ImagePhoneMfDashboardPlan1700w from '@/public/actual/phone-mf-dashboard-plan_1700w.png'
import ImagePhoneMfDashboardPlan600w from '@/public/actual/phone-mf-dashboard-plan_600w.png'
import ImagePhoneMfDashboardPlan900w from '@/public/actual/phone-mf-dashboard-plan_900w.png'
import ImagePhoneMfHome1300w from '@/public/actual/phone-mf-home_1300w.png'
import ImagePhoneMfHome1700w from '@/public/actual/phone-mf-home_1700w.png'
import ImagePhoneMfHome600w from '@/public/actual/phone-mf-home_600w.png'
import ImagePhoneMfHome900w from '@/public/actual/phone-mf-home_900w.png'
import ImagePhoneMfPrenatalPdp1300w from '@/public/actual/phone-mf-prenatal-pdp_1300w.png'
import ImagePhoneMfPrenatalPdp1700w from '@/public/actual/phone-mf-prenatal-pdp_1700w.png'
import ImagePhoneMfPrenatalPdp600w from '@/public/actual/phone-mf-prenatal-pdp_600w.png'
import ImagePhoneMfPrenatalPdp900w from '@/public/actual/phone-mf-prenatal-pdp_900w.png'
import ImagePhoneBg from '@/public/actual/showcase-mf-home-bg.svg'
import { easeInOutCubic } from '@/utils/animation'
import { themeValue } from '@/utils/theme'
import {
  motion,
  useScroll,
  useTransform
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export const ModernFertilityTriplePhone = () => {
  const target = useRef<HTMLDivElement>(null)
  const scroll = useScroll({ target, offset: ['0.4 end', '0.46 start'] })
  const [x, setX] = useState(50)

  useEffect(() => {
    const update = () => {
      setX(themeValue('--mf-phone-translate-right'))
    }

    update()

    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const transformLeft = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    ['0%', `-${x}%`],

    { ease: easeInOutCubic },
  )
  const transformRight = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    ['0%', `${x}%`],

    { ease: easeInOutCubic },
  )

  const scale = useTransform(scroll.scrollYProgress, [0, 1], [0.7, 0.75], {
    ease: easeInOutCubic,
  })

  const scaleImg = useTransform(scroll.scrollYProgress, [0, 1], [1, 1.3], {
    ease: easeInOutCubic,
  })

  return (
    <div className="mx-auto max-w-site relative">
      <div className="z-20 relative">
        <h2 className="px-4 lg:text-center max-w-[1150px] mx-auto copy-largest font-heading z-20 relative">
          A responsive website, <br className="hidden lg:block" />
          built from the ground up.
        </h2>

        <div className="pb-10 lg:pb-20" />

        <div className="relative">
          <div className="  w-full top-0 left-0">
            <div className="absolute h-[240vh] w-full top-[-60vh] left-0 z-10 mx-auto overflow-hidden pointer-events-none">
              <motion.div
                className="size-full bg-no-repeat bg-size-[auto_500px] lg:bg-size-[auto_800px] bg-position-[center_70vh] md:bg-position-[center_65vh] lg:bg-position-[center_60vh] 2xl:bg-position-[center_60vh] pointer-events-none"
                style={{
                  backgroundImage: `url(${ImagePhoneBg.src})`,
                  scale: scaleImg,
                }}
              />
            </div>
          </div>
          <div className="w-[200px] lg:w-[298px] mx-auto relative z-20">
            <div
              className="h-[200vh] -top-[100vh] lg:-top-[84vh] absolute w-full pointer-events-none"
              ref={target}
            />
            <img
              src={ImagePhoneMfHome1300w.src}
              srcSet={`${ImagePhoneMfHome600w.src} 600w, ${ImagePhoneMfHome900w.src} 900w, ${ImagePhoneMfHome1300w.src} 1300w, ${ImagePhoneMfHome1700w.src} 1700w`}
              sizes="(max-width: 1024px) 200px, 298px"
              className="mx-auto w-full relative z-20"
            />
            <motion.img
              src={ImagePhoneMfDashboardPlan1300w.src}
              srcSet={`${ImagePhoneMfDashboardPlan600w.src} 600w, ${ImagePhoneMfDashboardPlan900w.src} 900w, ${ImagePhoneMfDashboardPlan1300w.src} 1300w, ${ImagePhoneMfDashboardPlan1700w.src} 1700w`}
              sizes="(max-width: 1024px) 200px, 298px"
              className="absolute top-0 left-0 w-full h-auto will-change-transform"
              style={{ x: transformLeft, scale }}
            />
            <motion.img
              src={ImagePhoneMfPrenatalPdp1300w.src}
              srcSet={`${ImagePhoneMfPrenatalPdp600w.src} 600w, ${ImagePhoneMfPrenatalPdp900w.src} 900w, ${ImagePhoneMfPrenatalPdp1300w.src} 1300w, ${ImagePhoneMfPrenatalPdp1700w.src} 1700w`}
              sizes="(max-width: 1024px) 200px, 298px"
              className="absolute top-0 left-0 w-full h-auto will-change-transform"
              style={{ x: transformRight, scale }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
