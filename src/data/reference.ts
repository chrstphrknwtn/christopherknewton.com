export type Entry = {
  createdAt: string // ISO 8601 - YYYY-MM-DD
  title: string
  subtitle?: string
  author?: string
  publisher?: string
  publication?: string
  publicationDate?: string // ISO 8601 - YYYY-MM-DD
  tags?: string[]
}

const entries: Entry[] = [
  {
    createdAt: '2025-05-12',
    title: 'The Book Monk',
    subtitle: 'The printer the world’s best photographers trust most',
    author: 'Rebecca Mead',
    publication: 'The New Yorker',
    publicationDate: '2017-05-22',
    tags: ['Steidl']
  },
  {
    createdAt: '2025-05-12',
    title: 'American Photography and the American Dream',
    author: 'James Guimond',
    publisher: 'The University of North Carolina Press',
    publicationDate: '1991-05-27',
    tags: ['mythology', 'society']
  }
]

export default entries
