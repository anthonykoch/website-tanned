/* eslint-disable import/order */
import postsData from '@/data/posts.json'
import type { Post } from '@/types'
import {
  createFileRoute,
  Link,
  notFound,
  useLocation,
} from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { markdownComponents } from '@/components/markdown-components'
import { RehypeCode } from '@/rehype-plugins/code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

// import { useEffect } from 'react'

import { Footer } from '@/features/site/footer/Footer'
// import { serialize } from 'superjson'
import { BlogHero, BlogPlaceholder } from '@/features/blog/Hero'
// import { easeOutExpo } from '@/utils/animation'
// import { animate } from 'motion/react'
import BlogPost from '@/features/blog/BlogPost'
import { ReactNode, useEffect } from 'react'
import matter from 'gray-matter'
import { animate } from 'motion/react'
import { easeOutExpo } from '@/utils/animation'
import { PostList } from '@/components/PostList'

interface PostContent {
  posts: Array<Post>
  post: Post
  body: any
  scope: any
}

export const getPost = createServerFn({ method: 'GET' })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<PostContent> => {
    // Find the post in our posts data
    const post = (postsData as Array<Post>).find((p) => p.slug === data.slug)

    if (!post) {
      throw notFound()
    }

    const { default: content } = await import(
      `../../posts/${post.folder}/index.mdx?raw`
    )

    const scope = {}
    // const { default: scope } = await import(
    //   `../../posts/${post.folder}/data.ts`
    // )

    const { content: body } = matter(content)

    return {
      post,
      posts: postsData as Array<Post>,
      body: await serialize(body),
      scope,
    }
  })

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  loader: async ({ params }) => {
    return await getPost({ data: { slug: params.slug } })
  },
})

function BlogPostPage() {
  const { post, posts, body, scope } = Route.useLoaderData()

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

  const { pathname } = useLocation()

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
            <div className="md pt-20 pb-24">
              <MDXRemote
                {...body}
                // source={body}
                components={markdownComponents}
                options={{
                  scope,
                  mdxOptions: {
                    remarkPlugins: [
                      // remarkSmartpants,
                      // remarkGfm,
                      // [remarkMdxEvalCodeBlock, filename],
                    ] as any,
                    rehypePlugins: [
                      rehypePrism,
                      RehypeCode,
                      rehypeAutolinkHeadings,
                      rehypeSlug,
                    ] as any,
                  },
                }}
              />
            </div>
          </div>
        </article>

        <div className="bg-white">
          {/* <div className="bg-[#f3f3f3]"> */}
          <div className="py-20 px-gutter max-w-3xl mx-auto">
            <h2 className="text-[14px] tracking-wider pb-5 font-display font-600">
              More from the blog
            </h2>
            <PostList posts={posts} activeId={post.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
