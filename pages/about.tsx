import Head from 'next/head';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout isSlim>
      <Head>
        <title>About · Christopher Newton</title>
      </Head>

      <p>
        This website is a place to assemble photographs as I produce them in a
        stream of consciousness-like manner, actively and retroactively.
        Eventually coherent projects may materialise.
      </p>

      <h2 className="subhead">Education</h2>
      <ul className="linklist">
        <li>
          <span className="tnum">2012 - 2013</span> · Master of Design (Graphic
          Communication), RMIT
        </li>
        <li>
          <span className="tnum">2004 - 2005</span> · Dip Arts (Graphic Art),
          RMIT
        </li>
      </ul>

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
