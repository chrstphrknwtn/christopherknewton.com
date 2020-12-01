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
          implementing user interfaces with React.
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
        Straight out of high school, and before studying graphic art, I spent
        three years in black <em>&amp;</em> white and colour darkrooms making
        photographs. Then digital cameras came along and ruined all the fun.
      </p>

      <p>
        <span className={markIfHash('graphic-design')}>
          From 2005 to 2010 I freelanced in Melbourne and London as a graphic
          artist and graphic designer on projects for Converse, Disney,
          Fujifilm, Kodak, Land Rover, Levi's, Tesco, Topshop, Vodafone and
          others.
        </span>
      </p>

      <p>
        <span className={markIfHash('graphic-design')}>
          In late 2010 I joined{' '}
          <ExternalLink
            href="https://ssense.com"
            title="SSENSE"
            className="small-caps">
            SSENSE
          </ExternalLink>
          , a Montréal-based fashion retailer, as their in-house digital
          designer contributing to ecommerce user experience and editorial and
          campaign art direction.
        </span>
      </p>

      <p>
        <span className={markIfHash('graphic-design')}>
          Over 2012 and 2013 I freelanced as a digital designer on projects for
          Mercedes Benz and National Australia Bank at{' '}
          <ExternalLink href="https://clemengerbbdo.com.au">
            Clemenger BBDO
          </ExternalLink>
          ; Ford, La Trobe University, and Shell at{' '}
          <ExternalLink href="https://www.wundermanthompson.com/australia">
            JWT
          </ExternalLink>
          ; and Holden, Formula One, and the University of Melbourne at{' '}
          <ExternalLink href="https://ajfpartnership.com.au">AJF</ExternalLink>.
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
