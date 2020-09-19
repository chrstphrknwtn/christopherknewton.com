import styles from './tumblrs.module.css';

const TumblrsPost = ({ post }: any) => {
  if (post.type !== 'photo') {
    return null;
  }

  const images = post.photos[0].alt_sizes;
  const thumbnail = images.find((i: any) => i.width >= 250 && i.width <= 500);
  if (!thumbnail) {
    return null;
  }

  return (
    <a className={styles.post} target="_blank" href={post.post_url}>
      <img src={thumbnail.url} />
    </a>
  );
};

export default TumblrsPost;
