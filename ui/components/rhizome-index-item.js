export default ({ rhizomeObject }) => `
<li class="rhizome-index-item">
  <h3 class="rhizome-index-item--title"><a href=${`/rhizomes/${rhizomeObject.slug}`}>${rhizomeObject.title}</a></h3>
  <p>
    ${rhizomeObject.date}, ${rhizomeObject.nodes.length} nodes.
  </p>
</li>
`;
