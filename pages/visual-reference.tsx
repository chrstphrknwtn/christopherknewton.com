import axios from 'axios';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Layout from '../components/layout';
import TumblrsGallery from '../components/tumblrs-gallery';

interface Props {
  tumblrs: Array<object>;
  error: string;
}

const TumblrsPage = ({ tumblrs, error }: Props) => (
  <Layout isWide>
    <Head>
      <title>Visual reference · Christopher Newton</title>
    </Head>
    {!tumblrs && error && <p>Whoops, something is broken...</p>}
    {tumblrs && (
      <>
        <h1 className="subhead">Visual reference</h1>
        <TumblrsGallery tumblrs={tumblrs} />
      </>
    )}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const requests = ['0x001a', '0x002b', '0x001e', '0x003d'].map(blogName => {
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
