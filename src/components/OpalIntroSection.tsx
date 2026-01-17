import { Description4x8Grid } from '@/features/grid/Description4x8Grid'
import { useScrollX } from '@/hooks/use-scroll-x'
import ImageGirl from '@/public/actual/girl.jpg'
import ImageOpalTadpole1200w from '@/public/actual/opal-tadpole_1200w.jpg'
import ImageOpalTadpole400w from '@/public/actual/opal-tadpole_400w.jpg'
import ImageOpalTadpole800w from '@/public/actual/opal-tadpole_800w.jpg'
import { motion, useScroll } from 'motion/react'
import { FC, useRef } from 'react'
import { FigCaption, MobileImageScroller } from './MobileImageScroller'

const ArrowRightSvg: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 18.9998C17.744 18.9998 17.488 18.9018 17.293 18.7068C16.902 18.3158 16.902 17.6838 17.293 17.2928L23.586 10.9998H2C1.448 10.9998 1 10.5518 1 9.99976C1 9.44776 1.448 8.99976 2 8.99976H23.586L17.293 2.70676C16.902 2.31576 16.902 1.68376 17.293 1.29276C17.684 0.901762 18.316 0.901762 18.707 1.29276L26.707 9.29276C26.804 9.38876 26.876 9.50076 26.925 9.61876C26.973 9.73476 27 9.86276 27 9.99676C27 9.99876 27 10.0008 27 10.0028C27 10.1368 26.973 10.2648 26.925 10.3808C26.876 10.4998 26.804 10.6108 26.707 10.7068L18.707 18.7068C18.512 18.9018 18.256 18.9998 18 18.9998Z"
        fill="black"
        className="transition-colors duration-150"
      />
    </svg>
  )
}

export const OpalIntroSection = () => {
  const opalIntroSectionRef = useRef<HTMLDivElement>(null)
  const opalViewSiteRef = useRef<HTMLAnchorElement>(null)

  const opalCameraImagesRef = useRef<HTMLDivElement>(null)

  const opalCameraScroll = useScroll({
    target: opalCameraImagesRef,
    offset: ['30vh end', '160vh end'],
  })

  const x = useScrollX({
    container: opalCameraImagesRef,
    scrollYProgress: opalCameraScroll.scrollYProgress,
  })

  return (
    <>
      <div className="xl:hidden">
        <div className="pb-20 lg:pb-30" />

        <FigCaption
          title="Opal Camera"
          description={
            <span className="max-w-[420px] block">
              A website made to market the capabilities of the C1 and Tadpole
              cameras, and the accompanying Composer app.
            </span>
          }
        />

        <MobileImageScroller
          x={x}
          container={opalCameraImagesRef}
          images={[
            <img src={ImageGirl.src} className="h-[320px] md:h-[420px]" />,
            <img
              src={ImageOpalTadpole800w.src}
              srcSet={`${ImageOpalTadpole400w.src} 400w, ${ImageOpalTadpole800w.src} 800w, ${ImageOpalTadpole1200w.src} 1200w`}
              sizes="(max-width: 768px) 320px, 420px"
              className="h-[320px] md:h-[420px]"
            />,
            // <img src="/final-compressed/card-opal.png" className="h-[320px]" />,
          ]}
        />
        <div className="pb-4" />

        <div className="px-4 text-center">
          <a
            href="https://opalcamera.com/"
            className="selector-view-site w-[200px] flex items-center justify-center gap-x-5 font-display uppercase text-[14px] font-500 tracking-[2px] text-white hover:text-black bg-black hover:bg-primary-500 hover:**:fill-black transition-all duration-150 px-5 py-2 shadow-none hover:shadow-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            View site
            <ArrowRightSvg className="w-[22px] *:fill-white " />
          </a>
        </div>
      </div>

      <div className="pb-20 lg:pb-30" />
      {/* Desktop version */}
      <div className="xl:max-w-[max(1200px,80%)] px-[16px] 5xl:max-w-[1800px] mx-auto hidden xl:flex gap-x-4 relative">
        <div className="w-[36.533085%]">
          <h3 className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[10px]">
            <span className="relative">
              <span className="setup-overflow">
                <span className="selector-opal-camera-title">Opal Camera</span>
              </span>
            </span>
          </h3>
          <div className="aspect-784/1190 relative">
            {/* <div className="striped rounded-md size-full"></div> */}
            <img
              src={ImageGirl.src}
              className="selector-opal-camera-image  absolute size-full left-0 top-0"
            />
          </div>
        </div>
        <div className="w-[42.870457%] self-end">
          <p className="text-[18px] xl:text-[22px] leading-[30px] font-heading font-500 pb-[26px] max-w-[350px] selector-opal-camera-text">
            The Opal Camera website was made to market the capabilities of the
            C1 and Tadpole cameras.
          </p>
          <div className="aspect-920/608 relative">
            <img
              src={ImageOpalTadpole800w.src}
              srcSet={`${ImageOpalTadpole400w.src} 400w, ${ImageOpalTadpole800w.src} 800w, ${ImageOpalTadpole1200w.src} 1200w`}
              sizes="(max-width: 1200px) 100vw, 42.87vw"
              className="selector-opal-camera-image object-cover absolute size-full top-0 left-0"
            />
          </div>
        </div>
        <div className="w-[20.503262%]">
          <div className="h-full flex flex-col items-start justify-end">
            <a
              href="https://opalcamera.com/"
              className="inline-flex items-center justify-center gap-x-5 w-full px-5 lg:py-3
                  font-display uppercase text-[14px] font-600 tracking-widest
                  text-white hover:text-black bg-black hover:bg-primary-500 hover:**:fill-black  transition-all duration-150 shadow-none hover:shadow-box"
              ref={opalViewSiteRef}
              target="_blank"
              rel="noopener noreferrer"
            >
              View site
              <ArrowRightSvg className="w-[22px] *:fill-white " />
            </a>
          </div>
        </div>
      </div>

      <div className="pb-20 lg:pb-30" />

      <div className=" mx-auto max-w-site">
        <Description4x8Grid>
          <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
            What is Opal Camera?
          </h2>
          <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
            Opal Camera creates premium webcams designed to help people look and
            sound great during video calls. Their main products are the Opal C1,
            a high-quality camera ideal for desktop or home office setups, and
            the Tadpole, a tiny portable camera made specifically for laptops.
          </p>
        </Description4x8Grid>
      </div>
      {/* <div className="pb-20 lg:pb-30" /> */}
      <div ref={opalIntroSectionRef}></div>
    </>
  )
}
