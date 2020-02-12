import ragtag from 'ragtag';
import marked from 'marked';
import layout from '../components/layout';

export default post => {
  const date = new Date(post.sys.createdAt);
  const dateString = new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

  const content = ragtag`
  <article class="post">

    <section class="post--meta">
      <span class="subhead"><a href="/posts">Posts</a></span>
      <span class="subhead">${dateString}</span>
    </section>

    <h1>${post.fields.title}</h1>

    <section class="post--body">
      ${marked(post.fields.body)}
    </section>

  </article>
  `;

  return layout({ content });
};
