import React from 'react';
import Image from 'next/image';
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
            <Image
              quality="100"
              src={`/images/${photograph.slug}.jpg`}
              alt={`${photograph.title}, ${photograph.year}`}
              width={photograph.width ? photograph.width : 2048}
              height={photograph.height ? photograph.height : 2048}
            />
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default PhotographGrid;
