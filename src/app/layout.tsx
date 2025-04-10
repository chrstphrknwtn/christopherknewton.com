import '@/styles/global.css'

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
          url: photographMeta.image.url,
          width: photographMeta.image.height,
          height: photographMeta.image.width
        }
      ]
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  )
}
