import ragtag from 'ragtag';
import layout from '../components/layout';

export default () => {
  const content = ragtag`
    <section>
      <p>Can't find that post!</p>
      <p>
        <a href="/posts">Back to the posts list</a>
      </p>
    </section>
  `;

  return layout({ content });
};
