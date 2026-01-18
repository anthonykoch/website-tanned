import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import type { Plugin } from 'vite'

const execAsync = promisify(exec)

export function postsPlugin(): Plugin {
  return {
    name: 'vite-plugin-posts',
    async buildStart() {
      // Build posts on server start
      console.log('Building posts...')
      await execAsync('pnpm run build:posts')
    },
    configureServer(server) {
      // Watch for MDX file changes
      server.watcher.add('posts/**/*.{md,mdx}')

      server.watcher.on('change', async (file) => {
        if (file.includes('/posts/') && (file.endsWith('.md') || file.endsWith('.mdx'))) {
          console.log('Post changed, rebuilding posts...')
          await execAsync('pnpm run build:posts')

          // Trigger HMR to reload
          server.ws.send({
            type: 'full-reload',
            path: '*',
          })
        }
      })
    },
  }
}
