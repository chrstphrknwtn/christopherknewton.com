import ragtag from 'ragtag';
import document from '../components/document';
import externalLink from '../components/external-link';

export default () => {
  const content = ragtag`
  <section class="home--main">
    <p class="home--intro">
      I know about <em><a href="/about">graphic design</a>,</em><br />
      am interested in <em>art history,</em><br />
      make <em>photographs,</em><br />
      and implement <em>${externalLink({ href: 'https://github.com/chrstphrknwtn', text: 'computer interfaces' })}</em>.
    </p>

    <h2 class="subhead">Visual reference · <a href="/visual-reference">Latest</a></h2>
    <ul class="linklist">
      <li>${externalLink({ href: 'https://0x001a.com', text: '0x001a.com' })} · <em>graphic</em></li>
      <li>${externalLink({ href: 'https://0x002b.com', text: '0x002b.com' })} · <em>photography</em></li>
      <li>${externalLink({ href: 'https://0x001e.com', text: '0x001e.com' })} · <em>painting</em></li>
    </ul>
  </section>

  <section>
    <h2 class="subhead">Contact</h2>
    <ul class="linklist">
      <li><a href="mailto:christopher.k.newton@me.com">christopher.k.newton@me.com</a></li>
      <li><a href="tel:+61 476 214 645">+61 476 214 645</a></li>
    </ul>
  </section>
  `;

  return document({ content, isIndex: true });
};
