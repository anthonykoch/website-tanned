import classNames from 'classnames'
import { FC } from 'react'

export const Grid: FC<{
  left: React.ReactNode
  right: React.ReactNode
  className?: string
}> = ({ left, right, className }) => {
  return (
    <div className={classNames('grid grid-cols-12 gap-x-4 px-4', className)}>
      <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-1">
        {left}
      </div>

      <div className="xl:col-start-6 2xl:col-start-6 md:col-span-8 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
        {right}
      </div>
    </div>
  )
}
