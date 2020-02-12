import contentful from '../lib/contentful';

import errorPage from '../ui/pages/error';
import postListPage from '../ui/pages/post-list';
import postPage from '../ui/pages/post';
import postNotFoundPage from '../ui/pages/post-not-found';

export default async (req, res) => {
  const { query } = req;

  // Redirect /posts/ (trailing slash) to /posts
  if (Object.hasOwnProperty.call(query, 'slug') && !query.slug) {
    res.writeHead(302, { Location: '/posts' });
    res.end();
    return;
  }

  // Post
  if (query.slug) {
    try {
      const response = await contentful.getEntries({ content_type: 'post', 'fields.slug': query.slug });

      if (response.items.length === 1) {
        res.send(postPage(response.items[0]));
      } else {
        res.status(404);
        res.send(postNotFoundPage());
      }
    } catch {
      res.status(500);
      res.send(errorPage('Something is broken...'));
    }

    return;
  }

  // Post list
  try {
    const response = await contentful.getEntries({ content_type: 'post' });
    if (response.items.length > 0) {
      res.send(postListPage(response.items));
    } else {
      res.send(errorPage('No posts yet!'));
    }
  } catch {
    res.status(500);
    res.send(errorPage('Something is broken...'));
  }
};
