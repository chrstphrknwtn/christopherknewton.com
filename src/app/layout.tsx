import '@/styles/global.css'

import Link from 'next/link'
import copyright from 'copyright'
import getPhotographMeta from '@/lib/getPhotographMeta'

import styles from './layout.module.css'

export async function generateMetadata() {
  const photographMeta = await getPhotographMeta()

  return {
    metadataBase: new URL('https://christopherknewton.com'),
    title: {
      template: '%s · Christopher Newton',
      default: 'Pictures · Christopher Newton'
    },
    openGraph: {
      images: [
        {
          url: photographMeta?.image.url || '',
          width: photographMeta?.image.height,
          height: photographMeta?.image.width
        }
      ]
    }
  }
}

const navigationLinks = [
  {
    route: '/pictures',
    label: 'pictures'
  },
  {
    route: '/about',
    label: 'about'
  }
]

const copyrightString = copyright({
  name: 'Christopher Newton',
  short: true,
  startYear: 1981
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.container}>
          <header className={styles.header}>
            <h1>Christopher Newton</h1>
            <ul>
              {navigationLinks.map(link => (
                <li key={link.route}>
                  <Link href={link.route}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </header>
          <section className={styles.content}>{children}</section>
          <footer className={styles.footer}>
            <p>{copyrightString}</p>
          </footer>
        </main>
      </body>
    </html>
  )
}
