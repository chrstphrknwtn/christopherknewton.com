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
    <a class="tumblr-post" target="_blank" href="${post.post_url}">
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
          <a target="_blank" href="${tumblr.blog.url}">${tumblr.blog.name}</a> · <em>${blogDescriptors[tumblr.blog.name]}</em>
        </p>
        ${tumblr.posts.map(post => tumblrPost(post))}
        <a target="_blank" class="tumblr-column--more" href="${tumblr.blog.url}">${tumblr.blog.name}.com</a>
        </section>
      `)}
    </section>
    <script>
      const doc = document;

      const html = doc.documentElement;
      const body = doc.body;

      const columnWrapper = doc.querySelector('.tumblr-columns-wrapper');
      const columnNodes = doc.querySelectorAll('.tumblr-column');
      const columns = Array.prototype.slice.call(columnNodes);

      function getScrollUnitInterval() {
        const scrollTop = (html.scrollTop || body.scrollTop);
        const scrollHeight = (html.scrollHeight || body.scrollHeight);
        const scroll = scrollTop / (scrollHeight - html.clientHeight);

        if (scroll <= 0) {
          return 0;
        }
        if (scroll >= 1) {
          return 1;
        }
        return scroll;
      }

      function handler() {
        const scroll = getScrollUnitInterval();
        const columnMaxHeight = columnWrapper.clientHeight;

        columns.forEach(col => {
          const delta = columnMaxHeight - col.clientHeight;

          if (delta > 0) {
            col.style.transform = 'translateY(' + (delta * scroll) + 'px)';
          }
        });
      }

      doc.addEventListener('scroll', handler);
      doc.addEventListener('resize', handler);
    </script>
  `;

  return document({ content, title: 'Visual reference', hasWideContent: true });
};
