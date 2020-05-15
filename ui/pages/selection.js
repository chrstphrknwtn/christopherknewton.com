import ragtag from 'ragtag';
import document from '../components/document';

export default () => {
  const content = ragtag`
    <section class="selection-intro responsive-container">
      <p>A selection of photographs.</p>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Indexical, 2020.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/indexical-1.jpg" alt="" />
        <img src="/static/images/indexical-2.jpg" alt="" />
        <img src="/static/images/indexical-3.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section reverse">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Solheimajokull, 2019.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/solheimajokull-11.jpg" alt="" />
        <img src="/static/images/solheimajokull-10.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Museum city, 2019.</h2>
        </div>
      </header>
      <section class="photo-section--images">
      </section>
    </section>

    <section class="photo-section reverse">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Landmannalaugar contact, 2019.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/landmannalaugar-contact.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Paths, 2019.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/paths-1.jpg" alt="" />
        <img src="/static/images/paths-2.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Graduation, 2018.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/graduation-1.jpg" alt="" />
        <img src="/static/images/graduation-2.jpg" alt="" />
        <img src="/static/images/graduation-3.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2><span class="small-caps">CDG</span> - <span class="small-caps">BRU</span>, 2014.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/cdgbru-1.jpg" alt="" />
        <img src="/static/images/cdgbru-2.jpg" alt="" />
        <img src="/static/images/cdgbru-3.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>9600 Meilleur, 2010.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/9600-meilleur.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Jethro, 2008.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/jethro.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section reverse">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Michael, 2008.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/michael.jpg" alt="" />
      </section>
    </section>

    <section class="photo-section">
      <header class="photo-section--header">
        <div class="responsive-container">
          <h2>Lucy, 2007.</h2>
        </div>
      </header>
      <section class="photo-section--images">
        <img src="/static/images/lucy.jpg" alt="" />
      </section>
    </section>
  `;

  return document({ content, title: 'Photography selection', hasMaxWidthContent: true });
};
