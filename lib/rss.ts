import fs from 'fs';
import { Feed } from 'feed';
import c from 'copyright';

import photographs, { Photograph } from '../data/photographs';

const copyrightString = c({
  name: 'Christopher Newton',
  short: true,
  startYear: 1981
});

(function () {
  console.log('Building RSS feed');

  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const baseUrl = 'https://christopherknewton.com';
  const date = new Date();
  const author = {
    name: 'Christopher Newton',
    email: 'hello@christopherknewton.com',
    link: baseUrl
  };

  const feed = new Feed({
    title: 'Christopher Newton',
    description: 'Photography',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    copyright: copyrightString,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      atom: `${baseUrl}/rss/atom.xml`
    },
    author
  });

  photographs.forEach((photograph: Photograph) => {
    const url = `${baseUrl}/${photograph.slug}`;
    feed.addItem({
      title: `${photograph.title}, ${photograph.year}`,
      description: `${photograph.title}, ${photograph.year}`,
      content: `<figure>
        <img src="${baseUrl}/images/${photograph.slug}.jpg" alt="${photograph.title}" />
      </figure>
      <figcaption>${photograph.title}, ${photograph.year}.</figcaption>`,
      id: url,
      link: url,
      author: [author],
      date: new Date(photograph.publishDate)
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
})();

export {};
