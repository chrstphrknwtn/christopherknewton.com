import ragtag from 'ragtag';
import document from '../components/document';
import projectListItem from '../components/project-list-item';

const entryIndex = ({ projects, isPreview }) => {
  const content = ragtag`
    <section>
      <h1 class="subhead">Recent Projects</h1>
      <ul class="linklist">
        ${projects.map(project => projectListItem({ project, isPreview }))}
      </ul>
    </section>
  `;

  return document({ content, isPreview });
};

export default entryIndex;
