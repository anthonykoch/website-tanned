import postsData from './posts.json'
import type { Post } from '../types'

export const getPosts = (): Promise<Array<Post>> => {
  // Posts are pre-built at build time, so this just returns the static data
  return Promise.resolve(postsData as Array<Post>)
}

