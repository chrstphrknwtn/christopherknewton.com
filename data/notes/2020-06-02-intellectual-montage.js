export default {
  slug: 'intellectual-montage',
  date: '2 June 2020',
  title: 'Intellectual montage',
  nodes: [
    {
      id: 'winogrand',
      url: 'https://www.pri.org/stories/2020-01-07/new-york-icons-central-park-zoo-garry-winogrand',
      title: 'Garry Winogrand',
      extract: '“Let’s face it. What do you know from a photograph? They don’t have narrative ability."'
    },
    {
      id: 'intellectual-montage',
      url: 'https://en.wikipedia.org/wiki/Soviet_montage_theory#Intellectual_montage',
      title: 'Soviet montage theory: Intellectual montage',
      extract: `Eisenstein argues that montage, especially intellectual montage, is an alternative system to continuity editing. He argued that "Montage is conflict" (dialectical) where new ideas, emerge from the collision of the montage sequence (synthesis) and where the new emerging ideas are not innate in any of the images of the edited sequence.

Concepts similar to intellectual montage would arise during the first half of the 20th century, such as Imagism in poetry (specifically Pound's Ideogrammic Method), or Cubism's attempt at synthesizing multiple perspectives into one painting. The idea of associated concrete images creating a new (often abstract) image was an important aspect of much early Modernist art.

Eisenstein relates this to non-literary "writing" in pre-literate societies, such as the ancient use of pictures and images in sequence, that are therefore in "conflict". Because the pictures are relating to each other, their collision creates the meaning of the "writing".`
    },
    {
      id: 'modernism',
      url: 'https://en.wikipedia.org/wiki/Modernism',
      title: 'Modernism'
    },
    {
      id: 'samsara-review',
      url: 'https://www.indiewire.com/2012/08/review-samsara-tells-the-story-of-our-world-with-stunning-visuals-spiritual-heft-106877/',
      title: 'Samsara (2011 film) Review, Katie Walsh.',
      extract: 'While the art is in the camera’s manipulation of images, the story is in the way these images are put together, edited to create sentences, paragraphs and pages of script simply through their juxtaposition. The film is told through the technique Soviet filmmaker Sergei Eisenstein described as “intellectual montage” nearly 100 years ago.'
    },
    {
      id: 'samsara-film',
      url: 'https://en.wikipedia.org/wiki/Samsara_(2011_film)#Critical_reception',
      title: 'Samsara (2011 film)'
    },
    {
      id: 'koyaanisqatsi',
      url: 'https://en.wikipedia.org/wiki/Koyaanisqatsi',
      title: 'Koyaanisqatsi (1982 film).',
      extract: `Fricke and Reggio chose to shoot unscripted footage and edit it into an hour-long film.

Footage of the Pruitt–Igoe housing project was shot from a helicopter.

[Ron Fricke](https://en.wikipedia.org/wiki/Ron_Fricke) edited the footage into a 20-minute reel, but "without regard for message or political content".`
    },
    {
      id: 'pruitt-igoe',
      url: 'https://en.wikipedia.org/wiki/Pruitt–Igoe',
      title: 'Pruitt-Igoe housing project'
    },
    {
      id: 'charles-jencks',
      url: 'https://www.tandfonline.com/doi/pdf/10.1080/13602360902867434',
      title: 'Charles Jencks and the historiography of Post-Modernism',
      extract: '"Modern Architecture died in St Louis, Missouri on July 15, 1972 at 3:32 PM (or thereabouts) when the infamous Pruitt-Igoe scheme, or rather several of its slab blocks, were given the final _coup de grace_ by dynamite."'
    }
  ],
  links: [
    { source: 'winogrand', target: 'intellectual-montage', value: 2 },
    { source: 'winogrand', target: 'samsara-film', value: 3 },
    { source: 'winogrand', target: 'koyaanisqatsi', value: 3 },
    { source: 'samsara-review', target: 'intellectual-montage', value: 1 },
    { source: 'samsara-film', target: 'samsara-review', value: 1 },
    { source: 'samsara-film', target: 'koyaanisqatsi', value: 1 },
    { source: 'koyaanisqatsi', target: 'intellectual-montage', value: 2 },
    { source: 'koyaanisqatsi', target: 'pruitt-igoe', value: 1 },
    { source: 'modernism', target: 'pruitt-igoe', value: 1 },
    { source: 'modernism', target: 'intellectual-montage', value: 3 },
    { source: 'charles-jencks', target: 'pruitt-igoe', value: 3 }
  ]
};
