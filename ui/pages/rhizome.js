import ragtag from 'ragtag';
import markdown from '../../lib/markdown';

import externalLink from '../elements/external-link';
import document from '../components/document';

const rhizomeNode = nodeObject => ragtag`
<div class="rhizome-node">
  <h2>${externalLink({ href: nodeObject.url, text: nodeObject.title })}</h2>
  ${nodeObject.extract && `<p>${markdown(nodeObject.extract)}</p>`}
</div>
`;

export default ({ rhizomeObject }) => {
  const content = ragtag`
  <article class="entry">

    <section class="entry--meta">
      <span class="subhead"><a href="/rhizomes">Rhizomes</a></span>
      <span class="subhead">${rhizomeObject.date}</span>
    </section>

    <h1>${rhizomeObject.title}</h1>

    <section class="entry--body">
      ${rhizomeObject.nodes.map(nodeObject => rhizomeNode(nodeObject))}
    </section>

  </article>
  `;

  return document({ content, title: `${rhizomeObject.title} · Rhizomes` });
};
