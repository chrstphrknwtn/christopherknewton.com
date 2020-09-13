import ragtag from 'ragtag';
import externalLink from '../components/external-link';
import document from '../components/document';

export default () => {
  const content = ragtag`
    <section class="page">
      <h1 class="subhead">About</h2>
      <p>I currently live in Melbourne and work on a small <span class="small-caps">SaaS</span> business.</p>

      <h2 class="subhead">Background</h2>
      <p>Between 2005 and 2010 I freelanced in Melbourne and London as a graphic designer in about thirty agencies and studios, for The Age Newspaper, Converse, Disney, Fujifilm, Globe Shoes, Kodak, Levi's, Target, Topshop, Vodafone and others I can't remember.</p>

      <p>In late 2010 I joined ${externalLink({ className: 'small-caps', href: 'https://ssense.com', text: 'SSENSE' })}, a Montréal-based fashion retailer, as their in-house digital designer contributing to ecommerce user experience and editorial <em>&amp;</em> campaign art direction.</p>

      <p>Over 2012 and 2013 I completed a Master of Design at <span class="small-caps">RMIT</span>, whilst freelancing as a designer/developer on campaigns for Mercedes Benz, National Australia Bank, and TAC Victoria at ${externalLink({ href: 'https://clemengerbbdo.com.au', text: 'Clemenger BBDO' })}; Ford, La Trobe University, and Shell at ${externalLink({ href: 'https://www.wundermanthompson.com/australia', text: 'JWT' })}; Holden, Formula One, and Melbourne University at ${externalLink({ href: 'https://ajfpartnership.com.au', text: 'AJF Partnership' })}.</p>

      <p>From late 2014 to early 2018 I worked for a Berlin-based fitness startup as a product designer, creating prototypes and implementing user experiences across a range of hardware and software platforms. Working on various project teams we built things like electron-based web apps for serial devices and <span class="small-caps">UX</span> research prototypes for ${externalLink({ href: 'https://en.wikipedia.org/wiki/Kinect', text: 'kinect' })}-based body-tracking interaction on the flagship augmented-reality workout device.</p>

      <h2 class="subhead">Education</h2>
      <ul class="linklist">
        <li><span class="tnum">2012 - 2013</span> · Master of Design (Graphic Communication), RMIT</li>
        <li><span class="tnum">2004 - 2005</span> · Dip Art (Graphic Art), RMIT</li>
      </ul>
    </section>
  `;

  return document({ content, title: 'About' });
};
