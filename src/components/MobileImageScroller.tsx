import { motion, MotionValue } from 'motion/react'
import { FC, ReactNode, Ref } from 'react'

export const MobileImageScroller: FC<{
  x: MotionValue
  images: ReactNode[]
  container: Ref<HTMLDivElement>
}> = ({ images, x, container }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-end gap-x-4 flex-nowrap will-change-transform w-full"
        style={{ x }}
        ref={container}
      >
        {images.filter(Boolean).map((image, i) => {
          return (
            <div key={i} className="relative shrink-0 will-change-transform">
              {image}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export const FigCaption: FC<{
  title?: ReactNode
  description?: ReactNode
}> = ({ title, description }) => {
  return (
    <div>
      <div className="px-4">
        <p className="font-bold text-[14px] uppercase tracking-[1.4px] pb-3">
          {title}
        </p>

        <p className="text-[15px] xl:text-[24px] leading-7 font-body text-black/70 font-500 pb-[26px]">
          {description}
        </p>
      </div>
    </div>
  )
}
