import axios from 'axios';

import tumblrsPage from '../ui/pages/tumblrs';
import errorPage from '../ui/pages/error';

export default async (req, res) => {
  let tumblrs;

  try {
    const requests = ['0x001a', '0x002b', '0x001e'].map(blogName => {
      return axios(`https://api.tumblr.com/v2/blog/${blogName}.tumblr.com/posts?api_key=${process.env.TUMBLR_API_KEY}`);
    });

    const responses = await Promise.all(requests);
    tumblrs = responses.map(response => response.data.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(errorPage());
    return;
  }

  res.send(tumblrsPage({ tumblrs }));
};
