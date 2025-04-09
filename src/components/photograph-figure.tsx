'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Photograph } from '../data/photographs'
import styles from './photograph-figure.module.css'

type Props = {
  photograph: Photograph
}

const PhotographFigure = ({ photograph }: Props) => {
  const [showDetail, setShowDetail] = useState(false)
  const imageUrl = showDetail
    ? `/images/${photograph.slug}-detail.jpg`
    : `/images/${photograph.slug}.jpg`

  return (
    <div className={styles.pageContainer}>
      <figure className={styles.photographFigure}>
        <img src={imageUrl} alt={`${photograph.title}, ${photograph.year}`} />
      </figure>

      <figcaption className={styles.photographCaption}>
        <section className={styles.name}>
          <Link href="/">Christopher Newton</Link>
        </section>

        <section className={styles.details}>
          {photograph.title}, {photograph.year}.
          {photograph.hasDetail && (
            <section className={styles.detailSwitcher}>
              <span
                className={showDetail ? '' : styles.active}
                onClick={() => setShowDetail(false)}
              >
                picture
              </span>
              {' · '}
              <span
                className={showDetail ? styles.active : ''}
                onClick={() => setShowDetail(true)}
              >
                detail
              </span>
            </section>
          )}
          <div className={styles.link}>
            <Link href="/">Index</Link>
          </div>
        </section>
      </figcaption>
    </div>
  )
}

export default PhotographFigure
