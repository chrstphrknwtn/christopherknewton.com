import ragtag from 'ragtag';
import markdown from '../../lib/markdown';

import externalLink from '../elements/external-link';
import document from '../components/document';

const rhizomeNode = nodeObject => ragtag`
<div class="rhizome-node">
  <h2>${nodeObject.url ? externalLink({ href: nodeObject.url, text: nodeObject.title }) : nodeObject.title}</h2>
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

    <section class="rhizome--node-graph"></section>

    <h1>${rhizomeObject.title}</h1>
    ${rhizomeObject.description && `<p>${rhizomeObject.description}</p>`}

    <span class="subhead">Nodes</span>
    <section class="entry--body">
      ${rhizomeObject.nodes.map(nodeObject => rhizomeNode(nodeObject))}
    </section>

    <script src="/static/lib/d3.v5.min.js"></script>
    <script>
      const data = ${JSON.stringify(rhizomeObject)};

      const width = 200;
      const height = 200;

      const links = data.links.map(d => Object.create(d));
      const nodes = data.nodes.map(d => Object.create(d));

      const simulation = d3.forceSimulation(nodes)
          .force("link", d3.forceLink(links).id(d => d.id).distance(d => d.value * 8))
          .force("charge", d3.forceManyBody().strength(-120))
          .force("center", d3.forceCenter(width / 2, height / 2));

      const svg = d3.create("svg")
          .attr("viewBox", [0, 0, width, height])
          .attr("width", width)
          .attr("height", height);

      const link = svg.append("g")
          .attr("stroke", "black")
          .selectAll("line")
          .data(links)
          .join("line")
          .attr("stroke-width", 1);

      const node = svg.append("g")
          .attr("stroke-width", 1)
          .selectAll("circle")
          .data(nodes)
          .join("circle")
          .attr("r", 5)
          .on("click", d => console.log(d.id));

      node.append("title")
          .text(d => d.id);

      simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
      });

      document.body.querySelector('.rhizome--node-graph').append(svg.node());
    </script>

  </article>
  `;

  return document({ content, title: `${rhizomeObject.title} · Rhizomes` });
};
