import ragtag from 'ragtag';
import externalLink from '../components/external-link';
import document from '../components/document';

export default () => {
  const content = ragtag`
    <section class="page">
      <h1 class="subhead">About</h2>
      <p>I currently live in Melbourne and work on a small <span class="small-caps">SaaS</span> business.</p>

      <h2 class="subhead">Background</h2>
      <p>Between 2005 and 2010 I freelanced in Melbourne and London as a graphic designer on projects for The Age newspaper, Converse, Disney, Fujifilm, Globe Shoes, Kodak, Land Rover, Levi's, Target, Topshop, Vodafone and others.</p>

      <p>In late 2010 I joined ${externalLink({ className: 'small-caps', href: 'https://ssense.com', text: 'SSENSE' })}, a Montréal-based fashion retailer, as their in-house digital designer contributing to ecommerce user experience and editorial and campaign art direction.</p>

      <p>Over 2012 and 2013 I freelanced as a digital designer and developer on projects for Mercedes Benz, National Australia Bank, and TAC Victoria at ${externalLink({ href: 'https://clemengerbbdo.com.au', text: 'Clemenger BBDO' })}; Ford, La Trobe University, and Shell at ${externalLink({ href: 'https://www.wundermanthompson.com/australia', text: 'JWT' })}; Holden, Formula One, and Melbourne University at ${externalLink({ href: 'https://ajfpartnership.com.au', text: 'AJF Partnership' })}.</p>

      <p>From late 2014 to early 2018 I worked for a Berlin-based fitness startup as a product designer, creating research prototypes and implementing interfaces across a range of hardware and software platforms.</p>

      <h2 class="subhead">Education</h2>
      <ul class="linklist">
        <li><span class="tnum">2012 - 2013</span> · Master of Design (Graphic Communication), RMIT</li>
        <li><span class="tnum">2004 - 2005</span> · Dip Art (Graphic Art), RMIT</li>
      </ul>
    </section>
  `;

  return document({ content, title: 'About' });
};
