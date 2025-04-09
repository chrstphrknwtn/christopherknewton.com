import Link from 'next/link'
import photographs from '../data/photographs'
import styles from './photograph-grid.module.css'

const PhotographGrid = () => (
  <div className={styles.container}>
    {photographs
      .filter(p => p.publish)
      .map(photograph => (
        <div className={styles.item} key={photograph.slug}>
          <Link href={`/pictures/${photograph.slug}`}>
            <img
              src={`/images/thumbnails/${photograph.slug}.jpg`}
              alt={`${photograph.title}, ${photograph.year}`}
            />
          </Link>
        </div>
      ))}
  </div>
)

export default PhotographGrid
