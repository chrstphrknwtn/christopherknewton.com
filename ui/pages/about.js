import ragtag from 'ragtag';
import externalLink from '../elements/external-link';
import document from '../components/document';

export default () => {
  const content = ragtag`
    <section class="entry">
      <h2 class="subhead">About</h2>
      <p>I'm a freelance <strong>UI developer</strong> from Melbourne. I implement user interfaces, user experience prototypes and design systems. I'm most useful where design and front end development coincide.</p>

      <p>For the last two years I've been working on ${externalLink({ href: 'https://fieldfolio.com', text: 'Fieldfolio' })}.</p>

      <h2 class="subhead">Background</h2>
      <p>On the first day of snow in December 2010, I started as the sole in-house designer at ${externalLink({ className: 'small-caps', href: 'https://ssense.com', text: 'SSENSE' })} in Montréal, an online retailer. I hadn't done any web work before, and to do anything interesting meant understanding the web. So over the next few months I taught myself enough <span class="small-caps">HTML</span>, <span class="small-caps">CSS</span> and jQuery to be dangerous, and by summer had redesigned and reimplemented the shopping and checkout experience. I spent the rest of 2011 iterating the website user interface and running photoshoots. It was a nice year.</p>

      <p>Over 2012 and 2013 I completed a Master of Design at RMIT, during which time I freelanced as a designer/developer on digital campaigns for Mercedes Benz, National Australia Bank, and TAC Victoria at ${externalLink({ href: 'https://clemengerbbdo.com.au', text: 'Clemenger BBDO' })}; Ford, La Trobe University, and Shell at ${externalLink({ href: 'https://www.wundermanthompson.com/australia', text: 'JWT' })}; Holden, Formula One, and Melbourne University at ${externalLink({ href: 'https://ajfpartnership.com.au', text: 'AJF Partnership' })}. It was a busy two years.</p>

      <p>In late 2014 I joined a Berlin startup as a product designer. The product was comprised of a kinect-based body-tracking fitness device (Smart Trainer) and a web app, which together offered personalised workouts with real-time stats and feedback. During the first year I established design consistency across the two apps, and implemented new features on the web app. Over the remaining two-and-a-half years I built new user experience prototypes as we worked on making the Smart Trainer more approachable to an older tech-averse audience. Along the way, a colleague and I built a standalone ${externalLink({ href: 'https://nwjs.io', text: 'node-webkit' })} app (before ${externalLink({ href: 'https://www.electronjs.org', text: 'Electron' })} was a thing) for gym staff to hook a digital scale directly into the platform, and a ${externalLink({ href: 'https://www.contentful.com', text: 'Contentful' })}-based support site. It was a very busy few years.</p>

      <h2 class="subhead">A bit more background</h2>
      <p>From 2005 to 2010 I freelanced in Melbourne and London as a graphic artist / graphic designer in more agencies and studios than I can remember, for clients like Disney, Fujifilm, Kodak, Levi's, Target, Topshop and Vodafone. Plus a semi-regular job typesetting classifieds for a french property magazine in Wimbeldon. It was a good five years.

    </section>
  `;

  return document({ content, title: 'About' });
};
