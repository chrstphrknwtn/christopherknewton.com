import ragtag from 'ragtag';
import document from '../components/document';
import externalLink from '../components/external-link';

export default () => {
  const content = ragtag`
  <p class="index-intro">I'm a developer from Melbourne with a <a href="/about">background</a> in design. I've been creating  interactive things for about ten years. These days I'm mostly building <em>&</em> maintaining ${externalLink({ href: 'https://nextjs.org', text: 'Next.js' })} apps.</p>

  <h3 class="subhead">Code</h3>
  <ul class="linklist">
    <li>${externalLink({ href: 'https://github.com/chrstphrknwtn', text: 'github.com/chrstphrknwtn' })}</li>
    <li>${externalLink({ href: 'https://www.npmjs.com/~chrstphrknwtn', text: 'npmjs.com/~chrstphrknwtn' })}</li>
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

  <h3 class="subhead">Visual reference · <a href="/visual-reference">Latest</a></h3>
  <ul class="linklist">
    <li>${externalLink({ href: 'https://0x001a.com', text: '0x001a.com' })} · <em>graphic</em></li>
    <li>${externalLink({ href: 'https://0x002b.com', text: '0x002b.com' })} · <em>photography</em></li>
    <li>${externalLink({ href: 'https://0x001e.com', text: '0x001e.com' })} · <em>painting</em></li>
  </ul>

  <h3 class="subhead">Colophon</h3>
  <ul class="linklist">
    <li>Built with ${externalLink({ href: 'https://github.com/chrstphrknwtn/ragtag', text: 'Ragtag' })}</li>
    <li>Typeset in ${externalLink({ href: 'http://www.georgduffner.at/ebgaramond/', text: 'EB Garamond' })}</li>
    <li>Deployed on ${externalLink({ href: 'https://vercel.com', text: 'Vercel' })}</li>
  </ul>
  `;

  return document({ content, isIndex: true });
};
