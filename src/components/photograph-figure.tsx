import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Photograph } from '../data/photographs'
import styles from './photograph-figure.module.css'

type Props = {
  photograph: Photograph
  image: StaticImageData
}

const PhotographFigure = ({ photograph, image }: Props) => {
  return (
    <div className={styles.pageContainer}>
      <figure className={styles.photographFigure}>
        <Image src={image} alt={`${photograph.title}, ${photograph.year}`} />
      </figure>

      <figcaption className={styles.photographCaption}>
        <section className={styles.name}>
          <Link href="/">Christopher Newton</Link>
        </section>

        <section className={styles.details}>
          {photograph.title}, {photograph.year}.
          <div className={styles.link}>
            <Link href="/pictures">Index</Link>
          </div>
        </section>
      </figcaption>
    </div>
  )
}

export default PhotographFigure
