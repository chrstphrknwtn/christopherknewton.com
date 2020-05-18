import ragtag from 'ragtag';
import externalLink from '../elements/external-link';
import document from '../components/document';

export default () => {
  const content = ragtag`
    <section class="entry">
      <p>I'm a developer from Melbourne with a background in design. I've been creating digital and interactive things for about ten years. These days I'm mostly building and maintaining ${externalLink({ href: 'https://nextjs.org', text: 'Next.js' })} apps.</p>

      <p>Since early 2018 I've been working on ${externalLink({ href: 'https://fieldfolio.com', text: 'Fieldfolio' })}.</p>

      <h2 class="subhead">Background</h2>

      <p>From 2005 to 2010 I freelanced in Melbourne and London as a graphic designer in about fifty agencies and studios, for The Age Newspaper, Converse, Disney, Fujifilm, Globe Shoes, Kodak, Levi's, Target, Topshop, Vodafone and a bunch of other clients that I can't remember.</p>

      <p>In December 2010, I started as in-house designer at ${externalLink({ className: 'small-caps', href: 'https://ssense.com', text: 'SSENSE' })} in Montréal, an online retailer. In between design projects I taught myself enough code to be dangerous and by summer we launched a new online shopping experience. I spent the rest of 2011 iterating the website <span class="small-caps">UX</span> and running photoshoots.</p>

      <p>Over 2012 and 2013 I completed a Master of Design at <span class="small-caps">RMIT</span>, during which time I freelanced as a designer/developer on digital campaigns for Mercedes Benz, National Australia Bank, and TAC Victoria at ${externalLink({ href: 'https://clemengerbbdo.com.au', text: 'Clemenger BBDO' })}; Ford, La Trobe University, and Shell at ${externalLink({ href: 'https://www.wundermanthompson.com/australia', text: 'JWT' })}; Holden, Formula One, and Melbourne University at ${externalLink({ href: 'https://ajfpartnership.com.au', text: 'AJF Partnership' })}.</p>

      <p>In late 2014 I joined a Berlin fitness startup as a product designer, creating prototypes and implementing user experiences across a range of hardware and software platforms, from traditional websites and web apps, to body-measurement and augmented-reality workout devices. I worked on various project teams building things like electron-based web apps for serial devices and <span class="small-caps">UX</span> research prototypes for ${externalLink({ href: 'https://en.wikipedia.org/wiki/Kinect', text: 'kinect' })}-based body-tracking interaction.</p>

    </section>
  `;

  return document({ content, title: 'About' });
};
