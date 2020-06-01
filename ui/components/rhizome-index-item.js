export default ({ rhizomeObject }) => `
<li class="rhizome-index-item">
  <h3><a href=${`/rhizomes/${rhizomeObject.slug}`}>${rhizomeObject.title}</a></h3>
  <small>
    ${rhizomeObject.date}, ${rhizomeObject.nodes.length} nodes.
  </small>
</li>
`;
