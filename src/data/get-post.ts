// import fs from 'node:fs/promises'
// import path from 'node:path'
// import * as datefns from 'date-fns'
// import { glob } from 'fast-glob'
// import matter from 'gray-matter'
// import type { Post } from '../types'

// const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')

// export const getPosts = async (): Promise<Array<Post>> => {
//   const files = await glob(pattern)
//   console.log({ files })

//   const metadata = files.map(async (filename) => {
//     const contents = await fs.readFile(filename, 'utf-8')
//     const folder = path.basename(path.dirname(filename))

//     const {
//       data: { id, title, createdAt },
//     } = matter(contents)

//     return {
//       id: String(id),
//       title,
//       folder,
//       createdAt,
//       humanized: {
//         createdAt: datefns.format(new Date(createdAt), 'MMMM, d y'),
//       },
//       slug: folder.slice(11).toLowerCase(),
//     }
//   })

//   return Promise.all(metadata).then((meta) =>
//     meta.sort(
//       (a, b) =>
//         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
//     ),
//   )
// }

