import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Container from '../../components/container';

import photographs, { Photograph } from '../../data/photographs';

import styles from './photographs.module.css';

type Props = {
  photograph: Photograph;
};

const PhotographsPage = ({ photograph }: Props) => (
  <Container isWide>
    <span className="subhead">
      <Link href="/photographs">
        <a>Photographs</a>
      </Link>
    </span>

    <figure className={styles.photographFigure}>
      <img src={`/images/${photograph.slug}.jpg`} alt={photograph.title} />
    </figure>

    <figcaption>
      {photograph.title}, {photograph.year}.
    </figcaption>
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = photographs.map(p => {
    return {
      params: {
        slug: p.slug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const photograph = photographs.find(p => p.slug === params?.slug);

  return {
    props: {
      photograph
    }
  };
};

export default PhotographsPage;
