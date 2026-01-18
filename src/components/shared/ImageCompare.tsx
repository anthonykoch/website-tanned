'use client'
import { applyRefs } from '@/utils/apply-ref'
import cx from 'classnames'
import { useMotionValue , motion, useDragControls} from 'motion/react'
import React, { useRef, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

interface Size {
  height: number
  width: number
}

export interface ImageCompareProps {
  left: string
  right: string
  height: number
  width: number
}

const Tag: React.FC<{ className?: string }> = ({ className, children }) => {
  return (
    <div
      className={cx(
        'bg-black/30 border-white/10 border absolute text-black/70 text-[13px] py-1 px-2.5 bottom-0 translate-y-full pointer-events-none',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const ImageCompare: React.FC<ImageCompareProps> = ({
  left,
  right,
  height,
  width,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragConstraintsRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  const [size, setSize] = useState<Size | null>(null)

  const onResize = ({ width, height }: Partial<Size>) => {
    if (typeof width !== 'number' || typeof height !== 'number') return

    if (size == null) {
      value.set(width / 2)
    }

    setSize({
      height,
      width,
    })
  }

  const { ref } = useResizeObserver({ onResize: onResize })
  const value = useMotionValue(200)
  const coverRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      <div className="relative">
        <div
          style={{ paddingBottom: `${(height / width) * 100}%` }}
          className="relative select-none overflow-hidden"
        >
          <div data-left className="absolute top-0 left-0 w-full z-10">
            <Tag className="right-0">After</Tag>
            {size && (
              <img
                src={left}
                alt=""
                style={{
                  width: size.width,
                  height: size.height,
                }}
              />
            )}
          </div>
          {size && (
            <motion.div
              style={{
                width: value,
                height: size.height,
                overflow: 'hidden',
              }}
              data-right
              className="h-full w-full absolute left-0 top-0 z-20"
            >
              <img
                src={right}
                alt=""
                style={{
                  width: size.width,
                  height: size.height,
                }}
                className="absolute left-0 top-0 max-w-none max-h-full block"
              />
              <Tag className="">Before</Tag>
            </motion.div>
          )}
          <div
            className="absolute top-0 left-0 z-30 w-full h-full select-none cursor-grab"
            onPointerDown={(e) => {
              if (e.button !== 0 || size == null || !coverRef.current) return

              const el = coverRef.current

              const left = Math.max(
                0,
                e.clientX - el.getBoundingClientRect().left,
              )

              const width = Math.min(left, size.width)
              value.set(width)
              dragControls.start(e, { snapToCursor: true })
            }}
            ref={applyRefs(dragConstraintsRef, ref, coverRef)}
          />
          {dragConstraintsRef.current && size != null && (
            <motion.div
              drag="x"
              onDrag={(e, { point: { x } }) => {
                if (!coverRef.current) return

                const el = coverRef.current
                const offsetLeft = el.getBoundingClientRect().left

                const width = Math.max(0, Math.min(x - offsetLeft, size.width))
                value.set(width)
              }}
              dragControls={dragControls}
              dragElastic={0}
              dragConstraints={dragConstraintsRef}
              dragMomentum={false}
              className="absolute top-0 left-1/2 h-full w-[1px] bg-white/90 pointer-events-none z-40"
            />
          )}
        </div>
      </div>
    </div>
  )
}
