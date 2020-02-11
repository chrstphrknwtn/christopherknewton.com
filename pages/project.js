import ragtag from 'ragtag';
import layout from '../components/layout';
import { projects } from '../data';

const content = ({ title }) => ragtag`
<section>
	<span class="subhead">Project</span>
	<h1>${title}</h1>
</section>
`;

export default (req, res) => {
  const project = projects.find(p => p.slug === req.query.slug);
  res.statusCode = project ? 200 : 404;
  res.send(layout({ content: project ? content(project) : '<h2>404: Not found</h2>' }));
};
