import { Footer } from '@/features/site/footer/Footer'

import { Billboard } from '@/components/Billboard'
import { OpalIntroSection } from '@/components/OpalIntroSection'
import { TripleChevron } from '@/features/embellishments/TripleChevron'

import { animate, motion, useScroll, useTransform } from 'motion/react'

import { easeOutExpo } from '@/utils/animation'
import { useEffect, useRef } from 'react'

import { Grid } from '@/components/Grid'
import { Hero } from '@/components/Hero'
import { ModernFertilityAbout } from '@/components/ModernFertilityAbout'
import { ModernFertilityBrand } from '@/components/ModernFertilityBrand'
import { ModernFertilityHero } from '@/components/ModernFertilityHero'
import { ModernFertilityShowcase } from '@/components/ModernFertilityShowcase'
import { ModernFertilityTriplePhone } from '@/components/ModernFertilityTriplePhone'
import { OpalFirst } from '@/components/OpalFirst'
import { OpalShowcase } from '@/components/OpalShowcase'
import { Description4x8Grid } from '@/features/grid/Description4x8Grid'

import { createFileRoute } from '@tanstack/react-router'

// import {
//   Zap,
//   Server,
//   Route as RouteIcon,
//   Shield,
//   Waves,
//   Sparkles,
// } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

// function App() {
//   const features = [
//     {
//       icon: <Zap className="w-12 h-12 text-cyan-400" />,
//       title: 'Powerful Server Functions',
//       description:
//         'Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.',
//     },
//     {
//       icon: <Server className="w-12 h-12 text-cyan-400" />,
//       title: 'Flexible Server Side Rendering',
//       description:
//         'Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.',
//     },
//     {
//       icon: <RouteIcon className="w-12 h-12 text-cyan-400" />,
//       title: 'API Routes',
//       description:
//         'Build type-safe API endpoints alongside your application. No separate backend needed.',
//     },
//     {
//       icon: <Shield className="w-12 h-12 text-cyan-400" />,
//       title: 'Strongly Typed Everything',
//       description:
//         'End-to-end type safety from server to client. Catch errors before they reach production.',
//     },
//     {
//       icon: <Waves className="w-12 h-12 text-cyan-400" />,
//       title: 'Full Streaming Support',
//       description:
//         'Stream data from server to client progressively. Perfect for AI applications and real-time updates.',
//     },
//     {
//       icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
//       title: 'Next Generation Ready',
//       description:
//         'Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.',
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
//       <section className="relative py-20 px-6 text-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
//         <div className="relative max-w-5xl mx-auto">
//           <div className="flex items-center justify-center gap-6 mb-6">
//             <img
//               src="/tanstack-circle-logo.png"
//               alt="TanStack Logo"
//               className="w-24 h-24 md:w-32 md:h-32"
//             />
//             <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
//               <span className="text-gray-300">TANSTACK</span>{' '}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 START
//               </span>
//             </h1>
//           </div>
//           <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
//             The framework for next generation AI applications
//           </p>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
//             Full-stack framework powered by TanStack Router for React and Solid.
//             Build modern applications with server functions, streaming, and type
//             safety.
//           </p>
//           <div className="flex flex-col items-center gap-4">
//             <a
//               href="https://tanstack.com/start"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
//             >
//               Documentation
//             </a>
//             <p className="text-gray-400 text-sm mt-2">
//               Begin your TanStack Start journey by editing{' '}
//               <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">
//                 /src/routes/index.tsx
//               </code>
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

function Home() {
  const timeout = useRef<any>(null)
  const hash = typeof window === 'undefined' ? '' : window.location.hash

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (!lookRef.current || !arrowsRef.current) return

      let delay = 0.4

      animate(
        lookRef.current,
        { opacity: [0, 1] },
        {
          duration: 1.5,
          delay: hash.length ? 0.5 : (delay += 0.5),
          ease: easeOutExpo,
        },
      )

      animate(
        arrowsRef.current,
        { opacity: [0, 1] },
        {
          duration: 1.2,
          delay: hash.length ? 0.5 + 0.06 : (delay += 0.07),
          ease: easeOutExpo,
        },
      )
    }, 400)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const lookRef = useRef<HTMLDivElement>(null)
  const arrowsRef = useRef<HTMLDivElement>(null)
  const firstBlockRef = useRef<HTMLDivElement>(null)

  const aboutOpalRef = useRef<HTMLDivElement>(null)

  const opalAboutSectionScroller = useScroll({
    target: aboutOpalRef,
    offset: ['-200px start', '400px start'],
  })

  const opalAboutSectionScale = useTransform(
    opalAboutSectionScroller.scrollYProgress,
    [0, 1],
    [1, 0.97],
  )

  const opalAboutSectionY = useTransform(
    opalAboutSectionScroller.scrollYProgress,
    [0, 1],
    [0, 300],
  )

  const cover = useRef<HTMLDivElement>(null)

  const coverScroll = useScroll({
    target: cover,
    offset: ['-20vw start', '0px start'],
  })

  const opacity = useTransform(coverScroll.scrollYProgress, [0, 1], [0, 0.9])

  return (
    <div>
      <section>
        <Hero />
      </section>

      <div className="w-full relative z-500">
        <div className="bg-[#EAEAEA]">
          <section id="work">
            <div className="bg-black text-white" ref={firstBlockRef}>
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>
                    <span className="block setup-fade-in" ref={lookRef}>
                      Brand: Opal Camera
                    </span>
                    <span className="setup-fade-in" ref={arrowsRef}>
                      <TripleChevron />
                    </span>
                  </p>
                </Billboard>
              </div>
            </div>
          </section>

          <section className="relative">
            <OpalIntroSection />
          </section>

          <section className="relative z-40">
            <OpalFirst />
          </section>

          <section>
            <div className="relative"></div>
            <div className="relative z-50">
              <OpalShowcase />
            </div>
          </section>
        </div>

        <div className="bg-white z-60 relative">
          <div ref={cover} />
          <motion.div
            style={{
              opacity,
            }}
            className="bg-black absolute top-[-100vh] left-0 h-screen w-full z-10 pointer-events-none"
          />
          <div className="text-black">
            <div className="max-w-site mx-auto">
              <Billboard>
                <p>
                  What started as a landing page grew into architecting an
                  entire <span className="whitespace-nowrap">e-commerce</span>{' '}
                  experience.
                </p>
              </Billboard>
            </div>
          </div>

          <div className="max-w-site mx-auto">
            <motion.div
              style={{
                scale: opalAboutSectionScale,
                y: opalAboutSectionY,
                z: 1,
              }}
              className="will-change-transform"
            >
              <Grid
                left={
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[240px] xl:ml-auto">
                    An expanding role in an evolving stack
                  </h2>
                }
                right={
                  <div className="flex flex-col gap-y-6 copy-body-4-sm lg:copy-body-4 text-[#888787] **:[span]:text-black/70 **:[span]:underline">
                    <p>
                      At the start of my time at Opal, I was purely creating the
                      front-end. I've since worked in many different aspects of
                      development, ranging from building out administrative
                      tools that manage email signups to custom email
                      development and Shopify management.
                    </p>

                    <p>
                      The Opal Camera website is a simple <span>Shopify</span>{' '}
                      app utilizing the Storefront API through{' '}
                      <span>graphQL</span> running inside an{' '}
                      <span>AdonisJS</span> application. In the beginning
                      stages, we were using <span>Docker</span> deployed through
                      Digital Ocean but have since transferred the site to a
                      much simpler stack of <span>NextJS</span> using Vercel.
                      The frontend is written using tools like{' '}
                      <span>Tailwind</span>, <span>motion.dev</span> and{' '}
                      <span>React</span>.
                    </p>
                  </div>
                }
              />
              <div className="pb-8 xl:pb-20" />

              <Grid
                left={
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[288px] xl:text-right xl:ml-auto">
                    A growing startup
                  </h2>
                }
                right={
                  <div className="*:pb-6 copy-body-4-sm lg:copy-body-4 text-[#888787] ">
                    <p>
                      Opal Camera has had great success and continues to grow,
                      having gotten several rounds of funding, even by the AI
                      giant OpenAI.
                    </p>
                  </div>
                }
              />
            </motion.div>
            <div className="pb-20 xl:pb-50" />

            <div ref={aboutOpalRef} />
          </div>

          <section>
            <div className="bg-white">
              <ModernFertilityBrand />

              <ModernFertilityHero />

              <div className="pb-40 lg:pb-50" />

              <section>
                <ModernFertilityTriplePhone />
                <div className="pb-20 lg:pb-50" />
              </section>

              <section className="z-20 relative">
                <div className="mx-auto max-w-site">
                  <Description4x8Grid>
                    <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
                      What is Modern Fertility?
                    </h2>
                    <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                      Modern Fertility is a women's health brand offering
                      at-home reproductive testing, including hormone tests that
                      assess key fertility markers like ovarian reserve and egg
                      count. Founded in 2017, it makes fertility information
                      more accessible and affordable by enabling convenient home
                      testing at a lower cost than traditional clinics.
                    </p>
                  </Description4x8Grid>
                </div>
              </section>

              <div className="pb-20 lg:pb-40" />

              <section>
                <ModernFertilityShowcase />
              </section>

              <section>
                <ModernFertilityAbout />
              </section>
            </div>
          </section>
        </div>

        <div className="bg-white z-10 relative">
          <section>
            <div className="max-w-site mx-auto">
              <div className="lg:grid grid-cols-12 gap-x-4 px-4 ">
                <p className="text-center lg:text-left lg:col-span-4 lg:col-start-6 ">
                  <span className="font-heading font-500 text-[58px] xl:text-[72px] leading-[1] z-10 relative size-30 bg-black text-white flex justify-center items-center logo-blink-rect">
                    <span className="block logo-blink">Fin</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="pb-60" />
          </section>

          <Footer />
        </div>
      </div>
    </div>
  )
}
