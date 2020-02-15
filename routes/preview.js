import { contentfulPreview } from '../lib/contentful';
import errorPage from '../ui/pages/error';
import post from '../ui/pages/post';
import project from '../ui/pages/project';

export default async (req, res) => {
  const { query } = req;

  if (!query.id) {
    res.status(400);
    res.send(errorPage('Entry ID Required'));
    return;
  }

  try {
    const response = await contentfulPreview.getEntry(query.id);

    switch (response.sys.contentType.sys.id) {
      case 'project':
        res.send(project({ project: response, isPreview: true }));
        return;
      case 'post':
        res.send(post({ post: response, isPreview: true }));
        return;
      default:
        res.status(400);
        res.send(errorPage('Unknown content type'));
        return;
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(errorPage());
  }
};
