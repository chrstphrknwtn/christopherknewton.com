import Container from '../components/container';
import ExternalLink from '../components/external-link';

const AboutPage = () => (
  <Container>
    <h1 className="subhead">About</h1>
    <p>
      I currently live in Melbourne and work on a small{' '}
      <span className="small-caps">SaaS</span> business.
    </p>

    <h2 className="subhead">Background</h2>
    <p>
      Between 2005 and 2010 I freelanced in Melbourne and London as a graphic
      designer on projects for The Age newspaper, Converse, Disney, Fujifilm,
      Globe Shoes, Kodak, Land Rover, Levi's, Target, Topshop, Vodafone and
      others.
    </p>

    <p>
      In late 2010 I joined{' '}
      <ExternalLink
        href="https://ssense.com"
        title="SSENSE"
        className="small-caps">
        SSENSE
      </ExternalLink>
      , a Montréal-based fashion retailer, as their in-house digital designer
      contributing to ecommerce user experience and editorial and campaign art
      direction.
    </p>

    <p>
      Over 2012 and 2013 I freelanced as a digital designer and developer on
      projects for Mercedes Benz, National Australia Bank, and TAC Victoria at{' '}
      <ExternalLink href="https://clemengerbbdo.com.au">
        Clemenger BBDO
      </ExternalLink>
      ; Ford, La Trobe University, and Shell at{' '}
      <ExternalLink href="https://www.wundermanthompson.com/australia">
        JWT
      </ExternalLink>
      ; Holden, Formula One, and Melbourne University at{' '}
      <ExternalLink href="https://ajfpartnership.com.au">AJF</ExternalLink>.
    </p>

    <p>
      From late 2014 to early 2018 I worked for a Berlin-based fitness startup
      as a product designer, creating research prototypes and implementing
      interfaces across a range of hardware and software platforms.
    </p>

    <h2 className="subhead">Education</h2>
    <ul className="linklist">
      <li>
        <span className="tnum">2012 - 2013</span> · Master of Design (Graphic
        Communication), RMIT
      </li>
      <li>
        <span className="tnum">2004 - 2005</span> · Dip Art (Graphic Art), RMIT
      </li>
    </ul>
  </Container>
);

export default AboutPage;
