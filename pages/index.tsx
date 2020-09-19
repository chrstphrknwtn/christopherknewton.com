import Link from 'next/link';

import Container from '../components/container';
import ExternalLink from '../components/external-link';

const AboutPage = () => (
  <Container isIndex>
    <p style={{ marginBottom: '3rem' }}>
      I know about{' '}
      <em>
        <Link href="/about">
          <a>graphic design</a>
        </Link>
        ,
      </em>
      <br />
      am interested in <em>art history,</em>
      <br />
      make <em>photographs,</em>
      <br />
      and implement{' '}
      <em>
        <ExternalLink href="https://github.com/chrstphrknwtn">
          computer interfaces
        </ExternalLink>
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
        <ExternalLink href="https://0x001a.com">0x002b.com</ExternalLink> ·{' '}
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
    </ul>

    <h2 className="subhead">Contact</h2>
    <ul className="linklist">
      <li>
        <a href="mailto:christopher.k.newton@me.com">
          christopher.k.newton@me.com
        </a>
      </li>
      <li>
        <a href="tel:+61 476 214 645">+61 476 214 645</a>
      </li>
    </ul>
  </Container>
);

export default AboutPage;
