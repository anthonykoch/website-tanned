'use client'

import { Post, PostList } from '@/components/PostList'
import { Footer } from '@/features/site/footer/Footer'
import { BlogHero, BlogPlaceholder } from '@/features/blog/Hero'
import { Link, useLocation } from '@tanstack/react-router'
import { ReactNode, useEffect } from 'react'
import { animate } from 'motion/react'
import { easeOutExpo } from '@/utils/animation'

export default function BlogPost({
  post,
  posts,
  children,
}: {
  post: Post
  posts: Post[]
  children: ReactNode
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    let delay = 0.5

    animate(
      '.selector-title',
      { y: [20, 0], opacity: [0, 1] },
      {
        delay: delay,
        ease: easeOutExpo,
        duration: 1,
      },
    )

    animate(
      '.selector-date',
      { y: [12, 0], opacity: [0, 1] },
      {
        delay: (delay += 0.08),
        ease: easeOutExpo,
        duration: 1,
      },
    )

    animate(
      '.selector-post',
      { opacity: [0, 1] },
      {
        delay: (delay += 0.06),
        ease: easeOutExpo,
        duration: 0.8,
      },
    )
  }, [])

  return (
    <div>
      <div className="absolute top-0 left-0 w-full">
        <BlogHero />
      </div>

      <BlogPlaceholder className="relative z-10">
        <header className="px-gutter pt-48 relative">
          <div className="max-w-post xl:max-w-post-wide  mx-auto">
            <h1
              className="selector-title setup-fade-in text-left text-[42px] lg:text-[52px] 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-800"
              style={{ transform: 'translateY(20px)' }}
            >
              <Link to={pathname} className="text-inherit">
                {post.title}
              </Link>
            </h1>
            <p
              className="selector-date setup-fade-in mt-4 text-white/90 font-display tracking-widest font-semibold"
              style={{ transform: 'translateY(12px)' }}
            >
              {post.humanized.createdAt}
            </p>
          </div>
        </header>
      </BlogPlaceholder>

      {/* <div className="lg:pb-20 pb-40"></div> */}

      <main>
        <article id="post">
          <div className="setup-fade-in selector-post">
            <div className="md pt-20 pb-24">{children}</div>
          </div>
        </article>

        <div className="bg-white">
          {/* <div className="bg-[#f3f3f3]"> */}
          <div className="py-20 px-gutter max-w-3xl mx-auto">
            <h2 className="text-[14px] tracking-wider pb-5 font-display font-600">
              More from the blog
            </h2>
            {/* <h2 className="text-[18px] pb-5 font-heading font-900">
              More from the blog
            </h2> */}
            <PostList posts={posts} activeId={post.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
