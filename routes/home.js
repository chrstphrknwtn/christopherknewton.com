import contentful, { contentfulPreview } from '../lib/contentful';
import home from '../ui/pages/home';

export default async (req, res) => {
  let posts;
  let projects;

  const contentfulClient = req.query.preview ? contentfulPreview : contentful;

  try {
    const response = await contentfulClient.getEntries();

    if (response.items.length > 0) {
      projects = response.items.filter(entry => entry.sys.contentType.sys.id === 'project');
      posts = response.items.filter(entry => entry.sys.contentType.sys.id === 'post');
    }
  } catch (error) {
    console.log(error);
  }

  res.send(home({ projects, posts, isPreview: Boolean(req.query.preview) }));
};
