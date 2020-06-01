import ragtag from 'ragtag';
import document from '../components/document';
import rhizomeIndexItem from '../components/rhizome-index-item';

const entryIndex = ({ rhizomes }) => {
  const content = ragtag`
    <section>
      <h1 class="subhead">Rhizome Index</h1>
      <ul class="linklist">
        ${rhizomes.map(rhizomeObject => rhizomeIndexItem({ rhizomeObject }))}
      </ul>
    </section>
  `;

  return document({ content, title: 'Rhizomes' });
};

export default entryIndex;
