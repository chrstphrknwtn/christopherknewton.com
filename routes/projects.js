import contentful from '../lib/contentful';
import errorPage from '../ui/pages/error';
import project from '../ui/pages/project';
import projectIndex from '../ui/pages/project-index';

export default async (req, res) => {
  const { query } = req;

  const contentfulClient = contentful({ isPreview: req.query.preview });

  // Redirect /projects/ (trailing slash) to /projects
  if (Object.hasOwnProperty.call(query, 'slug') && !query.slug) {
    res.writeHead(302, { Location: '/projects' });
    res.end();
    return;
  }

  // Project
  if (query.slug) {
    try {
      const response = await contentful.getEntries({ content_type: 'project', 'fields.slug': query.slug });

      if (response.items.length === 1) {
        res.send(project({ project: response.items[0] }));
      } else {
        res.status(404);
        res.send(errorPage('Project not found.'));
      }
    } catch (error) {
      console.error(error);
      res.status(500);
      res.send(errorPage());
    }

    return;
  }

  // Project index
  try {
    const response = await contentfulClient.getEntries({ content_type: 'project' });
    if (response.items.length > 0) {
      res.send(projectIndex({ projects: response.items, isPreview: query.preview }));
    } else {
      res.send(errorPage('No projects yet!'));
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(errorPage());
  }
};
