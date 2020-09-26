import { useEffect } from 'react';
import cx from 'classnames';

import ExternalLink from './external-link';
import TumblrsPost from './tumblrs-post';
import styles from './tumblrs.module.css';

const blogDescriptors = {
  '0x001a': 'graphic',
  '0x002b': 'photography',
  '0x001e': 'painting',
};

const handler = (props: any) => {
  const doc = document;

  const html = doc.documentElement;
  const body = doc.body;

  const columnWrapper = doc.querySelector('#tumblrs-container');
  const columnNodes = doc.querySelectorAll('.tumblr-column');
  const columns = Array.prototype.slice.call(columnNodes);

  function getScrollUnitInterval() {
    const scrollTop = html.scrollTop || body.scrollTop;
    const scrollHeight = html.scrollHeight || body.scrollHeight;
    const scroll = scrollTop / (scrollHeight - html.clientHeight);

    if (scroll <= 0) {
      return 0;
    }
    if (scroll >= 1) {
      return 1;
    }
    return scroll;
  }

  const scroll = getScrollUnitInterval();
  const columnMaxHeight = columnWrapper?.clientHeight;

  columns.forEach((col: any) => {
    const delta = columnMaxHeight ? columnMaxHeight - col.clientHeight : 0;

    if (delta > 0) {
      col.style.transform = `translateY(${delta * scroll}px)`;
    }
  });
};

const TumblrsGallery = ({ tumblrs }: any) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  });

  return (
    <section id="tumblrs-container" className={styles.container}>
      {tumblrs.map((tumblr: any) => (
        <section
          key={tumblr.blog.name}
          className={cx(styles.column, 'tumblr-column')}>
          <p>
            <ExternalLink href={tumblr.blog.url}>
              {tumblr.blog.name}
            </ExternalLink>{' '}
            · <em>{blogDescriptors[tumblr.blog.name as keyof typeof blogDescriptors]}</em>
          </p>
          {tumblr.posts.map((post: any) => (
            <TumblrsPost key={post.id} post={post} />
          ))}
          <ExternalLink href={tumblr.blog.url}>
            {tumblr.blog.name}.com
          </ExternalLink>
        </section>
      ))}
    </section>
  );
};

export default TumblrsGallery;
