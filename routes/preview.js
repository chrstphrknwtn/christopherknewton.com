import { contentfulPreview } from '../lib/contentful';
import error from '../ui/pages/error';
import post from '../ui/pages/post';
import project from '../ui/pages/project';

export default async (req, res) => {
  const { query } = req;

  if (!query.id) {
    res.status(400);
    res.send(error('Entry ID Required'));
    return;
  }

  try {
    const response = await contentfulPreview.getEntry(query.id);

    switch (response.sys.contentType.sys.id) {
      case 'project':
        res.send(project(response));
        return;
      case 'post':
        res.send(post(response));
        return;
      default:
        res.status(400);
        res.send(error('Unknown content type'));
        return;
    }
  } catch {
    res.status(500);
    res.send(error());
  }
};
