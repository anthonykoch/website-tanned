import { Billboard } from './Billboard'
import { ExhibitPages } from './ExhibitPages'
import ImageShowcaseDoctor800w from '@/public/actual/showcase-doctor_800w.jpg'
import ImageShowcaseDoctor1200w from '@/public/actual/showcase-doctor_1200w.jpg'
import ImageShowcaseDoctor1800w from '@/public/actual/showcase-doctor_1800w.jpg'
import ImageShowcaseDoctor2400w from '@/public/actual/showcase-doctor_2400w.jpg'
import ImageShowcaseDoctor3000w from '@/public/actual/showcase-doctor_3000w.jpg'
import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

export const OpalShowcase = () => {
  const video = useRef<HTMLVideoElement>(null)
  const isInView = useInView(video)

  useEffect(() => {
    if (!video.current) return

    if (isInView) {
      video.current.play()
    } else {
      video.current.pause()
    }
  }, [isInView])

  return (
    <div>
      <div className="max-w-site mx-auto z-10 relative xl:-mt-40">
        <Billboard bottomSpacer={null} textSize="lg">
          <p className="copy-largest">
            I've since worked on <br className="hidden lg:block" />
            many parts of Opal.
          </p>
        </Billboard>
      </div>

      <ExhibitPages />
    </div>
  )
}
