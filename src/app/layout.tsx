import '@/styles/global.css'
import data from '@/data/photographs'
import styles from './layout.module.css'

export async function generateMetadata() {
  const photograph = data[0]

  const imageModule = await import(`/public/images/${photograph.slug}.jpg`)
  const image = imageModule.default

  return {
    metadataBase: new URL('https://christopherknewton.com'),
    title: {
      template: '%s · Christopher Newton',
      default: 'Pictures · Christopher Newton'
    },
    openGraph: {
      images: [
        {
          url: image.src,
          width: image.height,
          height: image.width
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
