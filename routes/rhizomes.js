import errorPage from '../ui/pages/error';
import rhizome from '../ui/pages/rhizome';
import rhizomeIndex from '../ui/pages/rhizome-index';

import data from '../data/rhizomes';

export default async (req, res) => {
  const { query } = req;

  // Redirect /rhizomes/ (trailing slash) to /rhizomes
  if (Object.hasOwnProperty.call(query, 'slug') && !query.slug) {
    res.writeHead(302, { Location: '/rhizomes' });
    res.end();
    return;
  }

  // Rhizome
  if (query.slug) {
    try {
      const rhizomeObject = data.find(el => el.slug === query.slug);
      res.send(rhizome({ rhizomeObject }));
    } catch (error) {
      console.error(error);
      res.status(404);
      res.send(errorPage());
    }

    return;
  }

  // Rhizome index
  try {
    if (data.length > 0) {
      res.send(rhizomeIndex({ rhizomes: data }));
    } else {
      res.send(errorPage('No rhizomes yet!'));
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(errorPage());
  }
};
