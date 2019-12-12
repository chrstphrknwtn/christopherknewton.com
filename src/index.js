import ragtag from 'ragtag';

import {works, qualifications, awards, groups, links} from './data';
import layout from './layout';

const content = ragtag`
${works.length > 0 && ragtag`
  <h2>Work</h2>
  <dl>
    ${works.map(w => ragtag`
      <dt>${w.year}</dt>
      <dd><a href="/${w.slug}">${w.title}</a></dd>
    `)}
  </dl>
`}

<h2>Information</h2>
<p>Born in Melbourne in 1981, I spent a good portion of the late 1990s and early 2000s in darkrooms.</p>
<p>In 2018 I returned to making photographs after fifteen years working as a designer and developer in Australia, Europe and North America.</p>
<p>I now live and work in Melbourne and Berlin.</p>

<h2>Education</h2>
<dl>
  ${qualifications.map(q => ragtag`
    <dt>${q.year}</dt>
    <dd>${q.program}</dd>
  `)}
</dl>

<h2>Group shows</h2>
<dl>
  ${groups.map(g => ragtag`
    <dt>${g.year}</dt>
    <dd>${g.title}</dd>
  `)}
</dl>

<h2>Awards</h2>
<dl>
  ${awards.map(a => ragtag`
    <dt>${a.year}</dt>
    <dd>${a.title}, ${a.from}.</dd>
  `)}
</dl>

<h2>Other</h2>
<ul>
  ${links.map(link => ragtag`<li><a target="_blank" href="${link.url}">${link.title}</a></li>`)}
</ul>
`;

export default (req, res) => {
	res.send(layout());
};
