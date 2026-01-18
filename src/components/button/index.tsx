import React from 'react'
import cx from 'classnames'

export const ViewWebsiteButton: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        'bg-[#494949] text-center cursor-pointer inline-flex justify-center items-center font-600 font-heading text-white/90 uppercase tracking-widest text-[12px] h-[58px] w-[235px]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Button<
  T extends keyof JSX.IntrinsicElements,
  As extends T,
  P extends JSX.IntrinsicElements[T],
>({ children, as: As }: P & { as?: As }) {
  if (As === undefined) {
    // @ts-ignore
    As = 'span'
  }

  return (
    // @ts-ignore
    <As className="w-[242px] h-[52px] bg-[#494949] flex items-center justify-center font-body uppercase font-semibold text-[12px] tracking-widest text-white">
      {children}
    </As>
  )
}
// <span className="absolute -left-5 inline-block bg-yellow1 h-[38px] w-[120%] -z-10 absolute-center"></span>
