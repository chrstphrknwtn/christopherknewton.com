import ragtag from 'ragtag';
import document from '../components/document';
import externalLink from '../elements/external-link';
import postListItem from '../components/post-list-item';
import projectListItem from '../components/project-list-item';

export default ({ projects, posts, isPreview }) => {
  const content = ragtag`
  <p class="index-intro">I'm a Melbourne-based freelance <strong>UI Developer</strong> with a <a href="/about">background</a> in design. I've been building user interfaces and user experience prototypes for ten years. These days I focus on web apps in ${externalLink({ href: 'https://reactjs.org', title: 'React' })} and ${externalLink({ href: 'https://nextjs.org', title: 'Next.js' })}.</p>

  ${projects && ragtag`
    <h3 class="subhead">Recent Projects</h3>
    <ul class="linklist">
      ${projects.map(project => projectListItem(project))}
    </ul>
  `}

  ${posts && ragtag`
    <h3 class="subhead">Posts</h3>
    <ul class="linklist">
      ${posts.map(post => postListItem(post))}
    </ul>
  `}

  <h3 class="subhead">Code</h3>
  <ul class="linklist">
    <li>${externalLink({ href: 'https://github.com/chrstphrknwtn', title: 'github.com/chrstphrknwtn' })}</li>
    <li>${externalLink({ href: 'https://www.npmjs.com/~chrstphrknwtn', title: 'npmjs.com/~chrstphrknwtn' })}</li>
  </ul>

  <h3 class="subhead">Contact</h3>
  <ul class="linklist">
  <li><a href="mailto:christopher.k.newton@me.com">christopher.k.newton@me.com</a></li>
  <li><a href="tel:+61 476 214 645">+61 476 214 645</a></li>
  </ul>

  <h3 class="subhead">Education</h3>
  <ul class="linklist">
    <li><span class="tnum">2012 - 2013</span> · Master of Design (Dist), RMIT</li>
    <li><span class="tnum">2004 - 2005</span> · Diploma of Graphic Art, RMIT</li>
  </ul>

  <h3 class="subhead">tumblrs</h3>
  <ul class="linklist">
    <li>${externalLink({ href: 'https://0x001a.com', title: '0x001a.com' })} · <em>graphic</em></li>
    <li>${externalLink({ href: 'https://0x002b.com', title: '0x002b.com' })} · <em>photography</em></li>
    <li>${externalLink({ href: 'https://0x001e.com', title: '0x001e.com' })} · <em>painting</em></li>
  </ul>

  <h3 class="subhead">Colophon</h3>
  <ul class="linklist">
    <li>Built with ${externalLink({ href: 'https://www.contentful.com', title: 'Contentful' })} <em>&</em> ${externalLink({ href: 'https://github.com/chrstphrknwtn/ragtag', title: 'Ragtag' })}</li>
    <li>Typeset in ${externalLink({ href: 'http://www.georgduffner.at/ebgaramond/', title: 'EB Garamond' })}</li>
    <li>Deployed on ${externalLink({ href: 'https://zeit.co', title: 'Zeit Now' })}</li>
  </ul>
  `;

  return document({ content, isIndex: true, isPreview });
};
