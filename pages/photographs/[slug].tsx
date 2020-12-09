import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Container from '../../components/container';
import PhotographFigure from '../../components/photograph-figure';

import photographs, { Photograph } from '../../data/photographs';

type Props = {
  photograph: Photograph;
};

const PhotographsPage = ({ photograph }: Props) => (
  <Container isWide>
    <Head>
      <title>
        {photograph.title}, {photograph.year} · Christopher Newton
      </title>
      <meta
        name="og:title"
        content={`${photograph.title}, ${photograph.year} · Christopher Newton`}
      />
      <meta name="og:image" content={`/images/${photograph.slug}.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <span className="subhead">
      <Link href="/photographs">
        <a>Photographs</a>
      </Link>
    </span>

    <PhotographFigure photograph={photograph} />
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
