import ragtag from 'ragtag';
import document from '../components/document';
import postListItem from '../components/post-list-item';

const postIndex = ({ posts, isPreview }) => {
  const content = ragtag`
    <section class="posts">
      <h1 class="subhead">Posts</h1>
      <ul class="linklist">
        ${posts.map(post => postListItem({ post, isPreview }))}
      </ul>
    </section>
  `;

  return document({ content, isPreview });
};

export default postIndex;
