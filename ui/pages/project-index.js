import ragtag from 'ragtag';
import document from '../components/document';
import projectListItem from '../components/project-list-item';

const entryIndex = projects => {
  const content = ragtag`
    <section>
      <h1 class="subhead">Recent Projects</h1>
      <ul class="linklist">
        ${projects.map(project => projectListItem(project))}
      </ul>
    </section>
  `;

  return document({ content });
};

export default entryIndex;
