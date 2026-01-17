import { useScrollX } from '@/hooks/use-scroll-x'
import { useScroll } from 'motion/react'
import { useRef } from 'react'
import { FigCaption, MobileImageScroller } from './MobileImageScroller'

export const ModernFertilityHero = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const mfMobileContainer = useRef<HTMLDivElement>(null)

  const mfmobilescroll = useScroll({
    target: scrollerRef,
    offset: ['start end', 'end start'],
  })

  const x = useScrollX({
    container: mfMobileContainer,
    scrollYProgress: mfmobilescroll.scrollYProgress,
  })

  return (
    <div className="mx-auto max-w-site">
      <div className="pb-20 lg:pb-40" />

      <div className="xl:hidden">
        <FigCaption
          title="Modern Fertility"
          description={
            <span className="max-w-[380px] block">
              A business dedicated to supporting and informing women about their
              fertility options.
            </span>
          }
        />
        <div className="relative">
          <div
            className="  z-9999 absolute top-[-20vh] left-0 w-full h-[100vh] pointer-events-none"
            // className="bg-[tomato]/50  z-9999 absolute top-[-20vh] left-0 w-full h-[100vh]"
            ref={scrollerRef}
          />
          <MobileImageScroller
            container={mfMobileContainer}
            x={x}
            images={[
              <div className="w-full aspect-472/855 relative">
                <img
                  src="/final-compressed/mf-first-mobile.svg"
                  className="h-[370px] md:h-[440px]  w-auto"
                />
              </div>,
              <div className="w-full aspect-786/598 relative">
                <img
                  src="/final-compressed/mf-homepage-mobile.png"
                  className="h-[370px] md:h-[440px]  w-auto"
                />
              </div>,
              <img
                src="/final-compressed/mf-recommended-mobile.png"
                className="h-[350px] w-auto lg:hidden"
              />,
            ]}
          />
        </div>
      </div>

      <div className="hidden xl:grid grid-cols-12 gap-x-4 px-4  ">
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-start-2 self-end">
          <p className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[15px]">
            Modern Fertility
          </p>

          <div className="max-lg:pb-4">
            <img
              src="/final-compressed/mf-first.svg"
              className="max-lg:max-w-[400px]"
            />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 2xl:col-span-5">
          <div className="h-full flex flex-col justify-end">
            <p className="hidden lg:block xl:text-[22px] leading-[30px] font-heading font-500 pb-[22px] max-w-[380px]">
              A business dedicated to supporting and informing women about their
              fertility options.
            </p>
            <img src="/final-compressed/mf-homepage.png" />
          </div>
        </div>
        {/* <div className="col-span-12 xl:col-span-2 2xl:col-span-2">
              <div className="h-full flex flex-col justify-end max-lg:pt-4 max-lg:max-w-[320px]">
                <p className="text-[13px] text-black/50 font-500 max-w-[200px]">
                  modernfertility.com is now a part of{' '}
                  <a
                    href="https://ro.co/modern-fertility/"
                    className="text-black/70 underline"
                  >
                    ro.co
                  </a>{' '}
                  and no longer able to be viewed.
                </p>
              </div>
            </div> */}
      </div>
    </div>
  )
}
