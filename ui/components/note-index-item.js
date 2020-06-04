export default ({ noteObject }) => `
<li class="note-index-item">
  <h3 class="note-index-item--title"><a href=${`/notes/${noteObject.slug}`}>${noteObject.title}</a></h3>
  <p>
    ${noteObject.date}, ${noteObject.nodes.length} nodes.
  </p>
</li>
`;
