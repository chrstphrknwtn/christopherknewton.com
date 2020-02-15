import ragtag from 'ragtag';
import markdown from '../../lib/markdown';
import document from '../components/document';

export default ({ project, isPreview }) => {
  const date = new Date(project.sys.createdAt);
  const dateString = new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

  const content = ragtag`
  <article class="entry">

    <section class="entry--meta">
      <span class="subhead"><a href="/projects">Projects</a></span>
      <span class="subhead">${dateString}</span>
    </section>

    <h1>${project.fields.title}</h1>

    <section class="entry--body">
      ${markdown(project.fields.body)}
    </section>

  </article>
  `;

  return document({ content, title: project.fields.title, isPreview });
};
