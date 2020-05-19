import ragtag from 'ragtag';
import document from '../components/document';
import markdown from '../../lib/markdown';

const data = {
  projects: [
    {
      title: 'Indexical',
      year: 2020,
      description: 'Humans continue to have [paper thoughts](https://vimeo.com/115154289) in the face of technological advancement. The layers and systems of bureaucratic communication in society largely remain marks on physical and virtual substrates. Our urban environment is another substrate for our paper thoughts.',
      images: [
        '/static/images/indexical-1.jpg',
        '/static/images/indexical-2.jpg',
        '/static/images/indexical-3.jpg',
        '/static/images/indexical-4.jpg'
      ]
    },
    {
      reverse: true,
      title: 'Solheimajokull',
      year: 2019,
      description: 'The physical scale of these scenes are not immediately obvious nor possible to concretely ascertain by viewing the images. Understanding the scale of the glacier has no direct effect on it\'s existence.',
      images: [
        '/static/images/solheimajokull-11.jpg',
        '/static/images/solheimajokull-10.jpg'
      ]
    },
    {
      title: 'Viewing Distance',
      year: 2019,
      description: '*You may enjoy yourself from here.*',
      images: [
        '/static/images/paths-1.jpg',
        '/static/images/paths-2.jpg',
        '/static/images/paths-3.jpg'
      ]
    },
    {
      reverse: true,
      title: 'Landmannalaugar Contact',
      year: 2019,
      description: '',
      images: [
        '/static/images/landmannalaugar-contact.jpg'
      ]
    },
    {
      title: 'Graduation Ceremony',
      year: 2018,
      description: 'Configuration and residue of a university graduation ceremony at the Royal Exhibition Building Melbourne.',
      images: [
        '/static/images/graduation-1.jpg',
        '/static/images/graduation-2.jpg',
        '/static/images/graduation-3.jpg',
        '/static/images/graduation-4.jpg'
      ]
    },
    {
      title: '9600 Meilleur',
      year: 2010,
      description: '',
      images: [
        '/static/images/9600-meilleur.jpg'
      ]
    },
    {
      title: 'Jethro',
      year: 2008,
      description: '',
      images: [
        '/static/images/jethro.jpg'
      ]
    }
  ]
};

export default () => {
  const content = ragtag`
    <section class="selection-intro responsive-container">
      <p>A selection of photographs <em>&amp;</em> projects.</p>
    </section>

    ${data.projects.map(project => ragtag`
      <section class="photo-section ${project.reverse && 'reverse'}">
        <header class="photo-section--header">
          <div class="responsive-container">
            <h2>${project.title}, ${project.year}.</h2>
            <p>${markdown(project.description)}</p>
          </div>
        </header>
        <section class="photo-section--images ${project.images.length === 1 && 'solo'}">
          ${project.images.map(image => `<a href="${image}" target="_blank"><img src="${image}" alt="" /></a>`)}
        </section>
      </section>
    `)}
  `;

  return document({ content, title: 'Photography selection', hasMaxWidthContent: true });
};
