import { FC, ReactNode } from 'react'

// export const Description4x8Grid: FC<{
//   left?: ReactNode
//   right?: ReactNode
// }> = ({ left, right }) => {
//   return (
//     <div className="grid grid-cols-12 gap-x-4 px-4">
//       <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-2 2xl:col-start-2">
//         {left}
//       </div>

//       <div className="xl:col-start-6 2xl:col-start-6 md:col-span-8 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
//         {right}
//       </div>
//     </div>
//   )
// }

export const Description4x8Grid: FC<{
  children: [ReactNode, ReactNode]
}> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 px-4">
      <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-2 2xl:col-start-2">
        {children?.[0]}
      </div>

      <div className="xl:col-start-6 2xl:col-start-6 md:col-span-8 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
        {children?.[1]}
      </div>
    </div>
  )
}
