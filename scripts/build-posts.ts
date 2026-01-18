import { format } from 'date-fns'
import { glob } from 'glob'
import fs from 'node:fs/promises'
import matter from 'gray-matter'
import path from 'node:path'

const pattern = path.join(process.cwd(), 'src/posts/**/*.{md,mdx}')

async function buildPosts() {
  const files = await glob(pattern)
  console.log(`Building ${files.length} posts...`)

  const metadata = files.map(async (filename) => {
    const contents = await fs.readFile(filename, 'utf-8')
    const folder = path.basename(path.dirname(filename))

    const {
      data: { id, title, createdAt },
    } = matter(contents)

    return {
      id: String(id),
      title,
      folder,
      createdAt,
      humanized: {
        createdAt: format(new Date(createdAt), 'MMMM, d y'),
      },
      slug: folder.slice(11).toLowerCase(),
    }
  })

  const posts = await Promise.all(metadata).then((meta) =>
    meta.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
  )

  // Write to a JSON file
  await fs.writeFile(
    path.join(process.cwd(), 'src/data/posts.json'),
    JSON.stringify(posts, null, 2),
  )

  console.log(`✓ Built ${posts.length} posts to src/data/posts.json`)
}

buildPosts().catch(console.error)
