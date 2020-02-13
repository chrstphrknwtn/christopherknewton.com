export default project => `
<li>
  <h3><a href="/projects/${project.fields.slug}">${project.fields.title}</a></h3>
</li>
`;
