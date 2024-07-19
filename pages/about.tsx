import Head from 'next/head';
import Layout from '../components/layout';
import photographs, { Photograph } from '../data/photographs';

const AboutPage = ({
  /* Use the latest photograph as the social image */
  photograph = photographs.find(p => p.slug === '2021-yellow-cabs')
}: {
  photograph?: Photograph;
}) => {
  return (
    <Layout isSlim>
      <Head>
        <title>About · Christopher Newton</title>
        <meta name="description" content="Photographs" />
        <meta name="og:title" content={`About · Christopher Newton`} />
        {photograph && (
          <meta name="og:image" content={`/images/${photograph.slug}.jpg`} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <p>This website is a place for me to think about pictures.</p>
    </Layout>
  );
};

export default AboutPage;
