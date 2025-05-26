import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

import styles from './reference.module.css'

import entries from '@/data/reference'

export const metadata: Metadata = {
  title: 'Reference'
}

const Year = ({ date }: { date?: string }) => {
  if (!date) return null
  const dateObj = new Date(date)
  return dateObj.getFullYear()
}

const Month = ({ date }: { date?: string }) => {
  if (!date) return null
  const dateObj = new Date(date)
  return new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(dateObj)
}

const Page = () => (
  <>
    <Header />
    <section className={styles.container}>
      <h1 className="small-caps">Bibliography</h1>

      <ul className={styles.entries}>
        {entries.map(e => (
          <li key={e.title} className={styles.entry}>
            <div>
              <h3>{e.title}</h3>
              {e.subtitle && (
                <p>
                  <em>{e.subtitle}</em>
                </p>
              )}
            </div>

            <div className={styles.meta}>
              <p>
                {e.author && (
                  <>
                    {e.author}
                    {', '}
                  </>
                )}
                {e.publication || e.publisher}
                {', '}
                {e.publication && (
                  <>
                    <Month date={e.publicationDate} />{' '}
                  </>
                )}
                <Year date={e.publicationDate} />
              </p>
              <p className="small-caps">
                {e.createdAt.replaceAll('-', '.')}
                {e.tags?.map(t => `, ${t}`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
    <Footer />
  </>
)

export default Page
