import ragtag from 'ragtag';
import layout from '../components/layout';

const postsListPage = posts => {
  const content = ragtag`
    <section class="posts">
      <h1 class="subhead">Posts</h1>
      <ul class="posts-list">
        ${posts.map(p => `
          <li>
            <h3><a href="/posts/${p.fields.slug}">${p.fields.title}</a></h3>
            <p>${p.fields.excerpt}</p>
          </li>
        `)}
      </ul>
    </section>
  `;

  return layout({ content });
};

export default postsListPage;
