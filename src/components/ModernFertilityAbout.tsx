import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Billboard } from './Billboard'
import { Grid } from './Grid'

export const ModernFertilityAbout = () => {
  const cover = useRef<HTMLDivElement>(null)

  const coverScroll = useScroll({
    target: cover,
    offset: ['-30vw start', '0 start'],
  })

  const opacity = useTransform(coverScroll.scrollYProgress, [0, 1], [0, 0.9])

  return (
    <div className="relative z-10 bg-white">
      <div ref={cover} />
      <motion.div
        style={{
          opacity,
        }}
        className="bg-black absolute top-[-100vh] left-0 h-screen w-full z-10 pointer-events-none"
      />
      <div>
        <div className="z-10 relative">
          <div className="max-w-site mx-auto">
            <Billboard>
              <p className="max-w-[1200px]">
                I led front-end development for the marketing website and user
                dashboard.
              </p>
            </Billboard>
          </div>
        </div>
      </div>


      <Grid
        left={
          <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[300px] xl:ml-auto lg:text-right">
            The beginnings
          </h2>
        }
        right={
          <div className="gap-y-6 flex flex-col copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
            <p>
              Modern Fertility approached me to assist them in developing their
              website. At the time, I was the sole front-end developer, working
              alongside Tom Chokel to help Carly and Afton give women the tools
              to better understand their fertility.
            </p>
            <p>
              I worked closely with designers to flesh out the designs into a
              reponsive website using just simple HTML and CSS (as Scss). Over
              time, the tech stack has evolved from the basics to React and
              styled-components running inside of a Django application.
            </p>
          </div>
        }
      />

      <div className="pb-10 lg:pb-20" />

      <Grid
        left={
          <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[300px] xl:ml-auto lg:text-right">
            A successful startup
          </h2>
        }
        right={
          <div className="gap-y-6 flex flex-col copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
            <p>
              Fast forward a few years later, and not only had the website grown
              in scale, but Modern Fertilityd grown to be a wildly successful
              company.{' '}
              <a
                href="https://techcrunch.com/2021/05/19/ro-acquires-modern-fertility-in-a-reportedly-225-million-deal/"
                className="underline text-black/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eventually, the company was acquired by Ro for $225 million.
              </a>
            </p>
          </div>
        }
      />

      <div className="pb-100" />
    </div>
  )
}
