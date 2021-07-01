import Link from 'next/link';

import Container from '../components/container';

const AboutPage = () => (
  <Container isIndex>
    <p>
      I make{' '}
      <Link href="/photographs">
        <a>
          <em>photographs</em>
        </a>
      </Link>
      .
      <br />I know about{' '}
      <Link href="/about#graphic-design">
        <a>
          <em>graphic design</em>
        </a>
      </Link>{' '}
      and{' '}
      <Link href="/about#interfaces">
        <a>
          <em>user interfaces</em>
        </a>
      </Link>
      .
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
  </Container>
);

export default AboutPage;
