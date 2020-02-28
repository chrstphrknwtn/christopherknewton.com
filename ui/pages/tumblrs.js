import ragtag from 'ragtag';
import document from '../components/document';

const blogDescriptors = {
  '0x001a': 'graphic',
  '0x002b': 'photography',
  '0x001e': 'painting'
};

export default ({ tumblrs }) => {
  const content = ragtag`
    <h1 class="subhead">Visual reference</h1>
    <section class="tumblr-columns-wrapper">
      ${tumblrs.map(tumblr => ragtag`
        <section class="tumblr-column">
        <p>
          <a href="${tumblr.blog.url}">${tumblr.blog.name}</a> · <em>${blogDescriptors[tumblr.blog.name]}</em>
        </p>
        ${tumblr.posts.map(post => ragtag`
          <a target="_blank" href="${post.post_url}">
            <img src="${post.photos[0].alt_sizes[4].url}" />
          </a>
        `)}
        </section>
      `)}
    </section>
  `;

  return document({ content, title: 'Tumblrs', hasWideContent: true });
};
