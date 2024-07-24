'use client';

import { useState } from 'react';
import { Photograph } from '../data/photographs';
import styles from './photograph-figure.module.css';

type Props = {
  photograph: Photograph;
};

const PhotographFigure = ({ photograph }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  const imageUrl = showDetail
    ? `/images/${photograph.slug}-detail.jpg`
    : `/images/${photograph.slug}.jpg`;

  return (
    <>
      <figure className={styles.photographFigure}>
        <img src={imageUrl} alt={`${photograph.title}, ${photograph.year}`} />
      </figure>

      <figcaption className={styles.photographCaption}>
        {photograph.title}, {photograph.year}.
      </figcaption>

      {photograph.hasDetail && (
        <section className={styles.detailSwitcher}>
          <span
            className={showDetail ? '' : styles.active}
            onClick={() => setShowDetail(false)}>
            picture
          </span>
          {' · '}
          <span
            className={showDetail ? styles.active : ''}
            onClick={() => setShowDetail(true)}>
            detail
          </span>
        </section>
      )}
    </>
  );
};

export default PhotographFigure;
