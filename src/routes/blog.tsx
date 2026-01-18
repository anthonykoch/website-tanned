import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Footer } from '@/features/site/footer/Footer'
import { BlogHero } from '@/features/blog/Hero'
import postsData from '@/data/posts.json'
// import { getPosts } from '@/data/posts'
import { PostList } from '@/components/PostList'
import { BlogPageAnimate } from '@/features/blog/Animate'

export const getPostsList = createServerFn().handler(() => postsData)

export const Route = createFileRoute('/blog')({
  component: Blog,
  loader: async () => {
    const posts = await getPostsList()
    return { posts }
  },
})

function Blog() {
  const { posts } = Route.useLoaderData()

  return (
    <div>
      <BlogHero />
      <BlogPageAnimate />
      <main>
        <div className="absolute top-0 left-0 z-10 w-full">
          <div className="max-w-[800px] mx-auto">
            <div className="px-4 pt-40 xl:pt-52">
              <h1 className="selector-title will-change-transform setup-fade-in text-[22px] font-600 font-display text-primary-500 pb-4 tracking-[2.5px] leading-none">
                My Writings
              </h1>
              <p className="selector-lead will-change-transform setup-fade-in font-body font-500 text-white/90 xl:text-[16px] text-[16px]">
                These are my various writings, mostly on topics surrounding
                front-end development.
              </p>
            </div>
          </div>
        </div>

        <div className="z-10 relative">
          <div className="max-w-site mx-auto">
            <section>
              <div className="max-w-[800px] mx-auto">
                <div className="relative pt-10 lg:pt-20 pb-20 lg:pb-30 min-h-[max(50lvh,800px)]">
                  <div>
                    <p className="ml-[141px] lg:ml-[170px] text-[14px] font-600 pl-4 font-display tracking-wider pb-2">
                      Most Recent
                    </p>
                  </div>
                  <div className="selector-border absolute left-[140px] lg:left-[170px] top-0 h-full w-px bg-[#e6e6e6] origin-top"></div>
                  <PostList posts={posts} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
