import contentful from '../lib/contentful';
import home from '../ui/pages/home';

export default async (req, res) => {
  let posts;
  let projects;

  try {
    const response = await contentful.getEntries();

    if (response.items.length > 0) {
      projects = response.items.filter(entry => entry.sys.contentType.sys.id === 'project');
      posts = response.items.filter(entry => entry.sys.contentType.sys.id === 'post');
    }
  } catch (error) {
    console.log(error);
  }

  res.send(home({ projects, posts }));
};
