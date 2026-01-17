import * as datefns from 'date-fns'
import glob from 'fast-glob'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import slugify from 'slugify'
import type { Post, PostMeta } from '../types'

const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')
// const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')

interface Path {
  params: {
    slug: string
  }
}

export const getPosts = async (): Promise<Array<Post>> => {
  const files = await getPostsFilenames()

  const metadata = files.map(async (filename) => {
    const contents = await fs.readFile(filename, 'utf-8')
    const folder = path.basename(path.dirname(filename))

    const {
      data: { id, title, createdAt },
    } = matter(contents)

    return {
      id,
      title,
      folder,
      createdAt,
      humanized: {
        createdAt: datefns.format(new Date(createdAt), 'MMMM, d y'),
      },
      slug: folder.slice(11).toLowerCase(),
    }
  })

  return Promise.all(metadata).then((meta) =>
    meta.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
  )
}

export const getPostsFilenames = async () => {
  return glob.sync(pattern)
}
