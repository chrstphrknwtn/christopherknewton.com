import React from 'react';
import { Photograph } from '../data/photographs';
import styles from './photograph-figure.module.css';

type Props = {
  photograph: Photograph;
};

const PhotographFigure = ({ photograph }: Props) => (
  <>
    <figure className={styles.photographFigure}>
      <img src={`/images/${photograph.slug}.jpg`} alt={photograph.title} />
    </figure>

    <figcaption>
      {photograph.title}, {photograph.year}.
    </figcaption>
  </>
);

export default PhotographFigure;
