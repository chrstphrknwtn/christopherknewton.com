export default post => `
<li>
  <h3><a href="/posts/${post.fields.slug}">${post.fields.title}</a></h3>
  <p><em>${post.fields.excerpt}</em></p>
</li>
`;
