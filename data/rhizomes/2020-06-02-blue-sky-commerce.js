export default {
  slug: 'blue-sky-commerce',
  date: '3 June 2020',
  title: 'Blue sky commerce',
  nodes: [
    {
      id: 'sim-and-sim',
      url: 'https://en.wikipedia.org/wiki/Simulacra_and_Simulation',
      title: 'Simulacra and Simulation'
    },
    {
      id: 'semiotics',
      url: 'https://en.wikipedia.org/wiki/Semiotics',
      title: 'Semiotics',
      extract: '...the study of signs and sign processes, indication, designation, likeness, analogy, allegory, metonymy, metaphor, symbolism, signification, and communication.'
    },
    {
      id: 'blue-skies',
      title: 'Artificial blue skies in advertising'
    },
    {
      id: 'paris-syndrome',
      url: 'https://en.wikipedia.org/wiki/Paris_syndrome',
      title: 'Paris syndrome',
      extract: '...a condition exhibited by some individuals when visiting or going on vacation to Paris, as a result of extreme shock at discovering that Paris is not as beautiful as they expected.'
    }
  ],
  links: [
    { source: 'sim-and-sim', target: 'semiotics', value: 1 },
    { source: 'sim-and-sim', target: 'blue-skies', value: 2 },
    { source: 'semiotics', target: 'blue-skies', value: 1 },
    { source: 'sim-and-sim', target: 'paris-syndrome', value: 3 }
  ]
};
