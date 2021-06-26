import Container from '../../components/container';
import PhotographGrid from '../../components/photograph-grid';

import photographs from '../../data/photographs';

const PhotographsIndex = () => (
  <Container>
    <h1 className="subhead">Photographs</h1>

    <PhotographGrid photographs={photographs} />
  </Container>
);

export default PhotographsIndex;
