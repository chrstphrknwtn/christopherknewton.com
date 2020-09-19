import axios from 'axios';
import { GetServerSideProps } from 'next';

import Container from '../components/container';
import TumblrsGallery from '../components/tumblrs-gallery';

const TumblrsPage = ({ tumblrs, error }) => (
  <Container isWide>
    {!tumblrs && error && <p>Whoops, something is broken...</p>}
    {tumblrs && (
      <>
        <h1 className="subhead">Visual reference</h1>
        <TumblrsGallery tumblrs={tumblrs} />
      </>
    )}
  </Container>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const requests = ['0x001a', '0x002b', '0x001e'].map(blogName => {
      return axios(
        `https://api.tumblr.com/v2/blog/${blogName}.tumblr.com/posts?api_key=${process.env.TUMBLR_API_KEY}`
      );
    });

    const responses = await Promise.all(requests);
    const tumblrs = responses.map(response => response.data.response);

    return { props: { tumblrs } };
  } catch (error) {
    console.error('Fetching tumblrs failed:', error.message);
    return { props: { error: error.message } };
  }
};

export default TumblrsPage;
