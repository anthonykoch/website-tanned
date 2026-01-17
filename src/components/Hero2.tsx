import { easeInOutCubic } from '@/utils/animation'
import { getOffset } from '@/utils/dom'
import { animate } from 'motion/react'
import { useRef } from 'react'

export const Hero = () => {
  const scroll = () => {
    const el = document.getElementById('work')!
    const offset = getOffset(el)

    animate(scrollY, offset.top, {
      ease: easeInOutCubic,
      duration: 1,
      onUpdate(progress) {
        window.scrollTo(0, progress)
      },
    })
  }

  const ref = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="absolute left-0 top-0 w-full">
        <div className="sticky top-0 left-0 w-full" ref={container}>
          <div className="absolute left-0 top-0 w-full h-[30vh]">
            <p className="sticky top-[15vh] z-40 w-full text-[clamp(36px,6vw,74px)] text-black font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading lg:text-center max-w-[1200px] mx-auto">
              I help companies and startups ship pixel-perfect, responsive
              websites.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[340vh] -mb-[230vh]">
        <div className="top-[400px] left-0 sticky w-full z-40" ref={ref}>
          <div className="max-w-site mx-auto relative z-20 px-4">
            <div className="h-[250vh]">
              <div className="sticky top-[50px]">
                <div className="text-center relative">
                  <div className="z-10 relative">
                    <img
                      src="/actual/opal-tadpole-shop-mobile.png"
                      className="max-w-[300px] md:max-w-[360px] w-full mx-auto"
                    />
                    <div className="pb-10" />
                    <button
                      onClick={scroll}
                      type="button"
                      className="cursor-pointer shadow-button-2 shadow-black/40 bg-black py-3.5 px-8 inline-block hover:bg-primary-500 transition-colors duration-100 hover:text-black text-[#eee]"
                    >
                      <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                        View my latest work
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-[10vh]" />
        </div>
      </div>
    </>
  )
}
