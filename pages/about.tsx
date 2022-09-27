import Head from 'next/head';
import Layout from '../components/layout';
import photographs, { Photograph } from '../data/photographs';

const AboutPage = ({
  /* Use the latest photograph as the social image */
  photograph = photographs[0]
}: {
  photograph: Photograph;
}) => {
  return (
    <Layout isSlim>
      <Head>
        <title>About · Christopher Newton</title>
        <meta name="description" content="Photographs" />
        <meta name="og:title" content={`About · Christopher Newton`} />
        <meta name="og:image" content={`/images/${photograph.slug}.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <p>
        This website is a place to assemble photographs as I produce them in a
        stream of consciousness-like manner, actively and retroactively.
      </p>
    </Layout>
  );
};

export default AboutPage;
