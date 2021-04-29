import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '../components/container';
import ExternalLink from '../components/external-link';

const AboutPage = () => {
  const router = useRouter();

  function markIfHash(hash: string) {
    return router.asPath.includes(hash) ? 'mark' : '';
  }

  return (
    <Container>
      <Head>
        <title>About · Christopher Newton</title>
      </Head>

      <h2 className="subhead" id="interfaces">
        <span className={markIfHash('interfaces')}>
          Product Design, 2014 &mdash; 2021.
        </span>
      </h2>
      <p>
        <span className={markIfHash('interfaces')}>
          I worked as a product designer from late 2014 to early 2021 in Berlin
          and Melbourne, designing and implementing research prototypes and user
          interfaces for native and web.
        </span>
      </p>

      <h2 className="subhead" id="graphic-design">
        <span className={markIfHash('graphic-design')}>
          Graphic design, 2004 &mdash; 2013.
        </span>
      </h2>
      <p>
        <span className={markIfHash('graphic-design')}>
          From 2005 to 2013 I worked in Melbourne, London, Montréal and Toronto
          as a graphic designer on projects for Converse, Disney, Ford, Formula
          One, Fujifilm, Holden, Kodak, Land Rover, La Trobe University, Levi's,
          Mercedes Benz, National Australia Bank,{' '}
          <span className="small-caps">SSENSE</span>, Shell, Tesco, Topshop,
          University of Melbourne, Vodafone and others.
        </span>
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
    </Container>
  );
};

export default AboutPage;
