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
        Now
      </h2>
      <p>
        <span className={markIfHash('interfaces')}>
          I currently live in Seattle and work on a small SaaS startup, mostly
          implementing user interfaces with React <em>&amp;</em> TypeScript.
        </span>
      </p>

      <ul className="linklist">
        <li>
          <span className={markIfHash('interfaces')}>
            <ExternalLink
              href="https://github.com/chrstphrknwtn"
              title="github.com/chrstphrknwtn">
              github/chrstphrknwtn
            </ExternalLink>
          </span>
        </li>
      </ul>

      <h2 className="subhead">Somewhat recently</h2>
      <p>
        <span className={markIfHash('interfaces')}>
          From late 2014 to early 2018 I worked for a Berlin-based fitness
          startup as a product designer, designing and implementing research
          prototypes and user interfaces on various hardware and software
          platforms.
        </span>
      </p>

      <h2 className="subhead" id="graphic-design">
        Ages ago
      </h2>
      <p>
        Following secondary school, before studying graphic art, I spent three
        years in black <em>&amp;</em> white and colour darkrooms making
        photographs. Then digital cameras came along and ruined all the fun.
      </p>

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
          <span className={markIfHash('graphic-design')}>
            <span className="tnum">2012 - 2013</span> · Master of Design
            (Graphic Communication), RMIT
          </span>
        </li>
        <li>
          <span className={markIfHash('graphic-design')}>
            <span className="tnum">2004 - 2005</span> · Dip Arts (Graphic Art),
            RMIT
          </span>
        </li>
      </ul>
    </Container>
  );
};

export default AboutPage;
