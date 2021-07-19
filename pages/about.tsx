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

      <h2 className="subhead">Contact</h2>
      <ul className="linklist">
        <li>
          <a href="mailto:hello@christopherknewton.com">
            hello@christopherknewton.com
          </a>
        </li>
        <li>
          <a href="tel:+1 206 698 6762">+1 206 698 6762</a> /{' '}
          <a href="tel:+61 476 214 645">+61 476 214 645</a>
        </li>
      </ul>
    </Layout>
  );
};

export default AboutPage;
