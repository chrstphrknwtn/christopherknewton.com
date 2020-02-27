import contentful from '../lib/contentful';
import error from '../ui/pages/error';
import postIndex from '../ui/pages/post-index';
import post from '../ui/pages/post';

export default async (req, res) => {
  const { query } = req;

  const contentfulClient = contentful({ isPreview: req.query.preview });

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
        res.send(post({ post: response.items[0] }));
      } else {
        res.status(404);
        res.send(error('Post not found.'));
      }
    } catch {
      res.status(500);
      res.send(error());
    }

    return;
  }

  // Post list
  try {
    const response = await contentfulClient.getEntries({ content_type: 'post' });
    if (response.items.length > 0) {
      res.send(postIndex({ posts: response.items, isPreview: query.preview }));
    } else {
      res.send(error('No posts yet!'));
    }
  } catch {
    res.status(500);
    res.send(error());
  }
};
