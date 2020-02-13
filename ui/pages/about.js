import ragtag from 'ragtag';
import document from '../components/document';

export default () => {
  const content = ragtag`
    <section class="entry">
      <h2 class="subhead">About</h2>
      <p>I'm a freelance <strong>UI developer</strong> from Melbourne. I implement user interfaces, user experience prototypes and design systems. I'm most useful where design and front end development coincide.</p>

      <p>For the last two years I've been working on <a>Fieldfolio</a>.</p>

      <h2 class="subhead">Background</h2>
      <p>On the first day of snow in December 2010, I started as the sole in-house designer at <a target="_blank" rel="noopener noreferrer" class="small-caps" href="https://ssense.com">SSENSE</a> in Montréal, an online retailer. I hadn't done any web work before, and to do anything interesting meant understanding the web. So over the next few months I taught myself enough <span class="small-caps">HTML</span>, <span class="small-caps">CSS</span> and jQuery to be dangerous, and by summer had redesigned and reimplemented the shopping and checkout experience. I spent the rest of 2011 iterating the website user interface and running photoshoots. It was a nice year.</p>

      <p>Over 2012 and 2013 I completed a Master of Design at RMIT, during which time I freelanced as a designer/developer on digital campaigns for Mercedes Benz, National Australia Bank, and TAC Victoria at <a target="_blank" rel="noopener noreferrer" href="https://clemengerbbdo.com.au">Clemenger BBDO</a>; Ford, La Trobe University, and Shell at <a target="_blank" rel="noopener noreferrer" href="https://www.wundermanthompson.com/australia/">JWT</a>; GM Holden, Formula One, and Melbourne University at <a target="_blank" rel="noopener noreferrer" href="https://ajfpartnership.com.au">AJF Partnership</a>. It was a busy two years.</p>

      <p>In late 2014 I joined a Berlin startup as a product designer. The product was comprised of a kinect-based body-tracking fitness device (Smart Trainer) and a web app, which together offered personalised workouts with real-time stats and feedback. During the first year I established design consistency across the two apps, and implemented new features on the web app. Over the remaining two-and-a-half years I built new user experience prototypes as we worked on making the Smart Trainer more approachable to an older tech-averse audience. Along the way, a colleague and I built a standalone <a target="_blank" rel="noopener noreferrer" href="https://nwjs.io">node-webkit</a> app (before <a target="_blank" rel="noopener noreferrer" href="https://www.electronjs.org">Electron</a> was a thing) for fitness trainers to take body measurements from a digital scale directly into the API, and a <a target="_blank" rel="noopener noreferrer" href="https://www.contentful.com">Contentful</a>-based support site. It was an intense few years.</p>

      <h2 class="subhead">A bit more background</h2>
      <p>Before opening a text editor, I freelanced in Melbourne and London as a graphic artist / graphic designer in more agencies and studios than I can remember, for clients like Disney, Kodak, Levi's, TopShop and Vodafone. Plus a semi-regular job typesetting classifieds for an obscure french property magazine in Wimbeldon. It was a forgettable 5 years.

    </section>
  `;

  return document({ content });
};
