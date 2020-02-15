import ragtag from 'ragtag';
import document from '../components/document';
import postListItem from '../components/post-list-item';
import projectListItem from '../components/project-list-item';

export default ({ projects, posts }) => {
  const content = ragtag`
  <p class="index-intro">I'm a Melbourne-based freelance <strong>UI Developer</strong> with a <a href="/about">background</a> in design. I've been building user interfaces and user experience prototypes for ten years. These days I focus on web apps in <a target="_blank" href="https://reactjs.org">React</a> and <a target="_blank" href="https://nextjs.org">Next.js</a>.</p>

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
  <li><a target="_blank" href="https://github.com/chrstphrknwtn">github.com/chrstphrknwtn</a></li>
  <li><a target="_blank" href="https://www.npmjs.com/~chrstphrknwtn">npmjs.com/~chrstphrknwtn</a></li>
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
  <li><a target="_blank" href="https://0x001a.com">0x001a.com</a> · <em>graphic</em></li>
  <li><a target="_blank" href="https://0x002b.com">0x002b.com</a> · <em>photography</em></li>
  <li><a target="_blank" href="https://0x001e.tumblr.com">0x001e.com</a> · <em>painting</em></li>
  </ul>

  <h3 class="subhead">Colophon</h3>
  <ul class="linklist">
  <li>Built with <a target="_blank" href="https://www.contentful.com">Contentful</a> &amp; <a target="_blank" href="https://github.com/chrstphrknwtn/ragtag">Ragtag</a></li>
  <li>Typeset in <a target="_blank" href="http://www.georgduffner.at/ebgaramond/">EB Garamond</a></li>
  <li>Deployed on <a target="_blank" href="https://zeit.co">Zeit Now</a></li>
  </ul>
  `;

  return document({ content, isIndex: true });
};
