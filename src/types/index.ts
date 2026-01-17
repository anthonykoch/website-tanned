export interface Post {
  id: string
  title: string
  createdAt: string
  folder: string
  slug: string
  humanized: {
    createdAt: string
  }
}
