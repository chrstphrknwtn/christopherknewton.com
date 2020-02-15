import ragtag from 'ragtag';
import marked from 'marked';
import document from '../components/document';

export default ({ post, isPreview }) => {
  const date = new Date(post.sys.createdAt);
  const dateString = new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

  const content = ragtag`
  <article class="entry">

    <section class="entry--meta">
      <span class="subhead"><a href="/posts">Posts</a></span>
      <span class="subhead">${dateString}</span>
    </section>

    <h1>${post.fields.title}</h1>

    <section class="entry--body">
      ${marked(post.fields.body || '')}
    </section>

  </article>
  `;

  return document({ content, title: post.fields.title, isPreview });
};
