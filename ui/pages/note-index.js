import ragtag from 'ragtag';
import document from '../components/document';
import noteIndexItem from '../components/note-index-item';

const notesIndex = ({ notes }) => {
  const content = ragtag`
    <section>
      <h1 class="subhead">Notes</h1>
      <ul class="linklist">
        ${notes.map(noteObject => noteIndexItem({ noteObject }))}
      </ul>
    </section>
  `;

  return document({ content, title: 'Notes' });
};

export default notesIndex;
