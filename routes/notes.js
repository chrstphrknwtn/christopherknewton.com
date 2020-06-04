import errorPage from '../ui/pages/error';
import note from '../ui/pages/note';
import noteIndex from '../ui/pages/note-index';

import notes from '../data/notes';

export default async (req, res) => {
  const { query } = req;

  // Redirect /notes/ (trailing slash) to /notes
  if (Object.hasOwnProperty.call(query, 'slug') && !query.slug) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return;
  }

  // Note
  if (query.slug) {
    try {
      const noteObject = notes.find(el => el.slug === query.slug);
      res.send(note({ noteObject }));
    } catch (error) {
      console.error(error);
      res.status(404);
      res.send(errorPage());
    }

    return;
  }

  // Note index
  try {
    if (notes.length > 0) {
      res.send(noteIndex({ notes }));
    } else {
      res.send(errorPage('No notes yet!'));
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(errorPage());
  }
};
