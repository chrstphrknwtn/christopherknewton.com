import React from 'react';
import Link from 'next/link';
import { Photograph } from '../data/photographs';
import styles from './photograph-grid.module.css';

type Props = {
  photographs: Array<Photograph>;
};

const PhotographGrid = ({ photographs }: Props) => (
  <div className={styles.container}>
    {photographs.map(photograph => (
      <div className={styles.item} key={photograph.slug}>
        <Link href={`/photographs/${photograph.slug}`}>
          <a>
            <img
              src={`/images/${photograph.slug}.jpg`}
              alt={photograph.title}
            />
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default PhotographGrid;
