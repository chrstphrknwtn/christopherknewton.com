import ragtag from 'ragtag';
import layout from '../components/layout';
import { tumblrs, qualifications } from '../../data';

export default () => {
  const content = ragtag`
	<p class="index-intro">I'm a Melbourne-based freelance <strong>UI Developer</strong> with a background in design. I've been building user interfaces and user experience prototypes for five years. These days I focus on web apps in <a target="_blank" href="https://reactjs.org">React</a> and <a target="_blank" href="https://nextjs.org">Next.js</a>.</p>

	<h3 class="subhead">Contact</h3>
	<ul class="index-list">
		<li><a href="mailto:christopher.k.newton@me.com">christopher.k.newton@me.com</a></li>
		<li><a href="tel:+61 476 214 645">+61 476 214 645</a></li>
	</ul>

	<h3 class="subhead">Code</h3>
	<ul class="index-list">
		<li><a target="_blank" href="https://github.com/chrstphrknwtn">github.com/chrstphrknwtn</a></li>
	</ul>

	<h3 class="subhead">Education</h3>
	<ul class="index-list">
	  ${qualifications.map(q => ragtag`
	    <li>${q.year} · ${q.program}</li>
	  `)}
	</ul>

	<h3 class="subhead">tumblrs</h3>
	<ul class="index-list">
		${tumblrs.map(t => `<li><a target="_blank" href="${t.url}">${t.title}</a> · <em>${t.subject}</em></li>`)}
	</ul>

	<h3 class="subhead">Colophon</h3>
	<ul class="index-list">
		<li>Built with <a target="_blank" href="https://www.contentful.com">Contentful</a> &amp; <a target="_blank" href="https://github.com/chrstphrknwtn/ragtag">Ragtag</a></li>
		<li>Typeset in <a target="_blank" href="http://www.georgduffner.at/ebgaramond/">EB Garamond</a></li>
		<li>Deployed on <a target="_blank" href="https://zeit.co">Zeit Now</a></li>
	</ul>
	`;

  return layout({ content, isIndex: true });
};
