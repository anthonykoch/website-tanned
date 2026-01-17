import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export const BlogPlaceholder: FC<{
  children?: ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div
      className={classNames('w-full h-[500px] lg:h-[50vh] xl:h-[60vh] relative', className)}
    >
      {/* <div className={classNames('w-full h-[max(500px,57vh)] relative', className)}> */}
      {children}
    </div>
  )
}

export const BlogHero = () => (
  <BlogPlaceholder>
    <BlogBackground>
      <BlogImages />
    </BlogBackground>
  </BlogPlaceholder>
)

export const BlogImages = () => {
  return (
    <>
      <img
        src="/blog-hero-m.jpg"
        className="md:hidden object-cover object-right size-full absolute"
      />
      <img
        src="/blog-hero-d.jpg"
        className="hidden md:block object-cover lg:object-[90%_0%] xl:object-[90%_35%] 2xl:object-[85%_-200px] size-full absolute opacity-50"
      />
    </>
  )
}

export const BlogBackground: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="bg-black/90 size-full">{children}</div>
  // return <div className="bg-[#2b292b] size-full">{children}</div>
}
