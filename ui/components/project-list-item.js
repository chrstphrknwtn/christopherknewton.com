export default ({ project, isPreview }) => `
<li>
  <h3><a href=${isPreview ? `/preview/${project.sys.id}` : `/projects/${project.fields.slug}`}>${project.fields.title}</a></h3>
</li>
`;
