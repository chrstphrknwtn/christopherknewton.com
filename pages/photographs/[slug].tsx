import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import PhotographFigure from '../../components/photograph-figure';

import photographs, { Photograph } from '../../data/photographs';

type Props = {
  photograph: Photograph;
};

const PhotographsPage = ({ photograph }: Props) => (
  <Layout>
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

    <PhotographFigure photograph={photograph} />
  </Layout>
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
