import Link from 'next/link';

import Container from '../components/container';
import ExternalLink from '../components/external-link';

const AboutPage = () => (
  <Container isIndex>
    <p>
      I make{' '}
      <em>
        <Link href="/photographs">photographs</Link>
      </em>
      .
      <br />I know about{' '}
      <em>
        <Link href="/about#graphic-design">
          <a>graphic design</a>
        </Link>{' '}
        and{' '}
        <Link href="/about#interfaces">
          <a>user interfaces</a>
        </Link>
      </em>
      .
    </p>

    <h2 className="subhead">
      Visual reference ·{' '}
      <Link href="/visual-reference">
        <a>Latest</a>
      </Link>
    </h2>
    <ul className="linklist">
      <li>
        <ExternalLink href="https://0x001a.com">0x001a.com</ExternalLink> ·{' '}
        <em>graphic</em>
      </li>
      <li>
        <ExternalLink href="https://0x002b.com">0x002b.com</ExternalLink> ·{' '}
        <em>photography</em>
      </li>
      <li>
        <ExternalLink href="https://0x001e.com">0x001e.com</ExternalLink> ·{' '}
        <em>painting</em>
      </li>
      <li>
        <ExternalLink href="https://0x003d.com">0x003d.com</ExternalLink> ·{' '}
        <em>architecture</em>
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
  </Container>
);

export default AboutPage;
