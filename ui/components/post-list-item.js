export default ({ post, isPreview }) => `
<li>
  <h3><a href=${isPreview ? `/preview/${post.sys.id}` : `/posts/${post.fields.slug}`}>${post.fields.title}</a></h3>
  <p><em>${post.fields.excerpt}</em></p>
</li>
`;
