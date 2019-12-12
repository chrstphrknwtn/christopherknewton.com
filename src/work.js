import ragtag from 'ragtag';

import { works } from './data';
import layout from './layout';

const Work = ({ title, year }) => ragtag`
<dl>
  <dt>${year}</dt>
  <dd>${title}</dd>
</dl>
`;

export default (req, res) => {
  const work = works.find(w => w.slug === req.query.slug);
  res.statusCode = work ? 200 : 404;
  res.send(layout({ content: work ? Work(work) : '<h2>404: Not found</h2>' }));
};
