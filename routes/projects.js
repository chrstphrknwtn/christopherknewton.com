import contentful from '../lib/contentful';
import error from '../ui/pages/error';
import project from '../ui/pages/project';
import projectIndex from '../ui/pages/project-index';

export default async (req, res) => {
  const { query } = req;

  // Redirect /posts/ (trailing slash) to /posts
  if (Object.hasOwnProperty.call(query, 'slug') && !query.slug) {
    res.writeHead(302, { Location: '/posts' });
    res.end();
    return;
  }

  // Project
  if (query.slug) {
    try {
      const response = await contentful.getEntries({ content_type: 'project', 'fields.slug': query.slug });

      if (response.items.length === 1) {
        res.send(project(response.items[0]));
      } else {
        res.status(404);
        res.send(error('Project not found.'));
      }
    } catch {
      res.status(500);
      res.send(error());
    }

    return;
  }

  // Project index
  try {
    const response = await contentful.getEntries({ content_type: 'project' });
    if (response.items.length > 0) {
      res.send(projectIndex(response.items));
    } else {
      res.send(error('No projects yet!'));
    }
  } catch {
    res.status(500);
    res.send(error());
  }
};
