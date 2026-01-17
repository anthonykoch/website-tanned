import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export const Billboard: FC<{
  children?: ReactNode
  textSize?: 'lg' | 'md'
  bottomSpacer?: ReactNode
}> = ({ children, textSize, ...props }) => (
  <BillboardGrid>
    <div
      className={classNames(
        'pt-18 xl:pt-42 font-heading font-600 text-[38px] md:text-[58px] leading-[1.2] xl:leading-none z-10',
        {
          'xl:text-[100px]': textSize === 'lg',
          'xl:text-[72px]': textSize == null || textSize === 'md',
        },
      )}
    >
      {children}
    </div>
    {props.hasOwnProperty('bottomSpacer') ? (
      props.bottomSpacer
    ) : (
      <div className="pb-20 xl:pb-30" />
    )}
  </BillboardGrid>
)

export const BillboardGrid: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 px-4">
      <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2">
        {children}
      </div>
    </div>
  )
}
