import Head from 'next/head';
import Layout from '../components/layout';
import PhotographGrid from '../components/photograph-grid';
import photographs, { Photograph } from '../data/photographs';

const AboutPage = ({
  /* Use the latest photograph as the social image */
  photograph = photographs.find(p => p.slug === '2021-yellow-cabs')
}: {
  photograph?: Photograph;
}) => (
  <Layout isIndex>
    <Head>
      <title>Photographs · Christopher Newton</title>
      <meta name="description" content="Photographs" />
      <meta name="og:title" content={`Photographs · Christopher Newton`} />
      {photograph && (
        <meta name="og:image" content={`/images/${photograph.slug}.jpg`} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <PhotographGrid photographs={photographs.filter(p => p.publish)} />
  </Layout>
);

export default AboutPage;
