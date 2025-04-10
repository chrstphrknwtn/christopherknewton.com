import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import photographs from '../data/photographs'
import styles from './photograph-grid.module.css'

const Thumbnail = async ({ slug }: { slug: string }) => {
  const imageModule = await import(`public/images/${slug}.jpg`)
  const image: StaticImageData = imageModule.default

  return <Image src={image} width={272} quality={40} alt="" />
}

const PhotographGrid = () => (
  <div className={styles.container}>
    {photographs
      .filter(p => p.publish)
      .map(photograph => (
        <div className={styles.item} key={photograph.slug}>
          <Link href={`/pictures/${photograph.slug}`}>
            <Thumbnail slug={photograph.slug} />
          </Link>
        </div>
      ))}
  </div>
)

export default PhotographGrid
