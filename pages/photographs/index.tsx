import Link from 'next/link';
import Container from '../../components/container';

import photographs from '../../data/photographs';

const PhotographsIndex = () => (
  <Container>
    <h1 className="subhead">Photographs</h1>

    <ul className="linklist">
      {photographs.map(photograph => (
        <li key={photograph.slug}>
          <span className="tnum">{photograph.year} - </span>
          <Link href={`/photographs/${photograph.slug}`}>
            <a>{photograph.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Container>
);

export default PhotographsIndex;
