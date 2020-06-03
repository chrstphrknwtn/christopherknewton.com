export default {
  slug: 'rhizograms',
  date: '2 June 2020',
  title: 'Node graph as rhizogram',
  nodes: [
    {
      id: 'notes',
      url: 'https://en.wikipedia.org/wiki/Notes_on_the_Synthesis_of_Form',
      title: 'Notes on the Synthesis of Form, Preface.',
      extract: 'I found that the diagrams themselves had immense power, and that, in fact, most of the power of what I had written lay in the power of these diagrams.'
    },
    {
      id: 'node-graph',
      url: 'https://en.wikipedia.org/wiki/Vertex_(graph_theory)',
      title: 'Vertex (graph theory)'
    },
    {
      id: 'rhizome',
      url: 'https://en.wikipedia.org/wiki/Rhizome_(philosophy)',
      title: 'Rhizome (philosophy)',
      extract: 'Rather than narrativize history and culture, the rhizome presents history and culture as a map or wide array of attractions and influences with no specific origin or genesis.'
    }
  ],
  links: [
    { source: 'notes', target: 'node-graph', value: 2 },
    { source: 'rhizome', target: 'node-graph', value: 1 }
  ]
};
