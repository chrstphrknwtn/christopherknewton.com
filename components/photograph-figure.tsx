import React from 'react';
import Image from 'next/image';
import { Photograph } from '../data/photographs';
import styles from './photograph-figure.module.css';

type Props = {
  photograph: Photograph;
};

const PhotographFigure = ({ photograph }: Props) => (
  <>
    <figure className={styles.photographFigure}>
      <Image
        src={`/images/${photograph.slug}.jpg`}
        alt={`${photograph.title}, ${photograph.year}`}
        quality="100"
        width={photograph.width ? photograph.width : 2048}
        height={photograph.height ? photograph.height : 2048}
      />
    </figure>

    <figcaption className={styles.photographCaption}>
      {photograph.title}, {photograph.year}.
    </figcaption>
  </>
);

export default PhotographFigure;
