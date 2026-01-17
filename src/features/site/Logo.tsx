import * as React from 'react'
import cx from 'classnames'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cx(
        'flex items-center px-4 xl:px-0 xl:justify-center w-[190px] xl:w-[220px]',
        className,
      )}
      style={{ transition: 'transform 200ms ease-in' }}
    >
      <span
        className="tracking-[2px] xl:tracking-[3px] font-display uppercase text-[15px] font-600"
      >
        Anthony Koch
      </span>
    </div>
  )
}
