import ragtag from 'ragtag';
import document from '../components/document';

const blogDescriptors = {
  '0x001a': 'graphic',
  '0x002b': 'photography',
  '0x001e': 'painting'
};

const tumblrPost = post => {
  if (post.type !== 'photo') {
    return;
  }

  const images = post.photos[0].alt_sizes;
  const thumbnail = images.find(i => i.width >= 250 && i.width <= 500);

  if (!thumbnail) {
    return;
  }

  return ragtag`
    <a target="_blank" href="${post.post_url}">
      <img src="${thumbnail.url}" />
    </a>
  `;
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
        ${tumblr.posts.map(post => tumblrPost(post))}
        </section>
      `)}
    </section>
  `;

  return document({ content, title: 'Tumblrs', hasWideContent: true });
};
