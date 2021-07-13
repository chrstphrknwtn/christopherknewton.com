import Layout from '../components/layout';
import PhotographGrid from '../components/photograph-grid';
import photographs from '../data/photographs';

const AboutPage = () => (
  <Layout isIndex>
    <PhotographGrid photographs={photographs} />
  </Layout>
);

export default AboutPage;
