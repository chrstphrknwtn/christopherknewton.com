import ragtag from 'ragtag';

import { works } from './data';
import layout from './layout';

const Work = ({ title, year }) => ragtag`
<h2>${title}</h2>
<p>${year}</p>
`;

export default (req, res) => {
  console.log(req.query);
  const work = works.find(w => w.slug === req.query.slug);
  res.statusCode = work ? 200 : 404;
  res.send(layout({ content: work ? Work(work) : '<h2>404: Not found</h2>' }));
};
