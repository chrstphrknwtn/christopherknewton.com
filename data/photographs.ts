export type Photograph = {
  publish: boolean
  publishDate: string
  year: number
  slug: string
  title: string
}

const photographs: Array<Photograph> = [
  {
    publish: true,
    publishDate: '2024-06-26',
    year: 2024,
    slug: '2024-green-wall',
    title: 'Green Wall'
  },
  {
    publish: true,
    publishDate: '2024-07-18',
    year: 2024,
    slug: '2024-aperture-grille-1',
    title: 'Aperture Grille 1'
  },
  {
    publish: true,
    publishDate: '2023-10-31',
    year: 2023,
    slug: '2023-gdansk-wraps',
    title: 'Gdańsk'
  },
  {
    publish: true,
    publishDate: '2023-10-31',
    year: 2023,
    slug: '2023-house-fire',
    title: 'House Fire'
  },
  {
    publish: true,
    publishDate: '2022-12-19',
    year: 2022,
    slug: '2022-white-house',
    title: 'White House'
  },
  {
    publish: false,
    publishDate: '2022-08-31',
    year: 2022,
    slug: '2022-sport-fence',
    title: 'Sport Fence'
  },
  {
    publish: true,
    publishDate: '2022-09-29',
    year: 2022,
    slug: '2022-flood-light',
    title: 'Flood Light'
  },
  {
    publish: true,
    publishDate: '2022-08-31',
    year: 2021,
    slug: '2021-yellow-cabs',
    title: 'Yellow Cabs'
  },
  {
    publish: true,
    publishDate: '2021-07-09',
    year: 2021,
    slug: '2021-lamp-shadow',
    title: 'Lamp Shadow'
  },
  {
    publish: true,
    publishDate: '2021-07-09',
    year: 2021,
    slug: '2021-lake-union',
    title: 'Lake Union, Seattle'
  },
  {
    publish: true,
    publishDate: '2021-06-25',
    year: 2021,
    slug: '2021-mopop-2',
    title: 'MoPOP Museum 2'
  },
  {
    publish: true,
    publishDate: '2021-06-25',
    year: 2021,
    slug: '2021-mopop-1',
    title: 'MoPOP Museum 1'
  },
  {
    publish: true,
    publishDate: '2021-07-05',
    year: 2021,
    slug: '2021-filmore-ca',
    title: 'Filmore California'
  },
  {
    publish: true,
    publishDate: '2021-07-06',
    year: 2021,
    slug: '2021-ventura-ca-2',
    title: 'Ventura California 2'
  },
  {
    publish: true,
    publishDate: '2021-07-06',
    year: 2021,
    slug: '2021-ventura-ca-1',
    title: 'Ventura California 1'
  },
  {
    publish: true,
    publishDate: '2021-06-26',
    year: 2021,
    slug: '2021-ferry-sunset-2',
    title: 'Ferry Sunset 2'
  },
  {
    publish: false,
    publishDate: '2021-06-26',
    year: 2021,
    slug: '2021-ferry-sunset-1',
    title: 'Ferry Sunset 1'
  },
  {
    publish: true,
    publishDate: '2021-07-13',
    year: 2021,
    slug: '2021-northern-hemisphere-scene-2',
    title: 'Northern Hemisphere Scene 2'
  },
  {
    publish: true,
    publishDate: '2021-07-03',
    year: 2021,
    slug: '2021-camping-alcove',
    title: 'Camping Alcove'
  },
  {
    publish: true,
    publishDate: '2021-06-25',
    year: 2021,
    slug: '2021-northern-hemisphere-scene-1',
    title: 'Northern Hemisphere Scene 1'
  },
  {
    publish: true,
    publishDate: '2021-06-25',
    year: 2020,
    slug: '2020-offworld-alternate',
    title: 'Offworld Alternate'
  },
  {
    publish: true,
    publishDate: '2021-04-22',
    year: 2020,
    slug: '2020-offworld-1',
    title: 'Offworld 1'
  },
  {
    publish: false,
    publishDate: '2021-04-22',
    year: 2020,
    slug: '2020-offworld-2',
    title: 'Offworld 2'
  },
  {
    publish: true,
    publishDate: '2021-02-10',
    year: 2020,
    slug: '2020-main-street-usa-1',
    title: 'Fourth Ave, Seattle'
  },
  {
    publish: false,
    publishDate: '2021-06-26',
    year: 2020,
    slug: '2020-eastern-wa-2',
    title: 'Eastern Washington 2'
  },
  {
    publish: false,
    publishDate: '2021-06-26',
    year: 2020,
    slug: '2020-eastern-wa-1',
    title: 'Eastern Washington 1'
  },
  {
    publish: true,
    publishDate: '2020-11-01',
    year: 2020,
    slug: '2020-ferry-windows',
    title: 'Ferry Windows'
  },
  {
    publish: false,
    publishDate: '2020-12-01',
    year: 2020,
    slug: '2020-fruit',
    title: 'Fruit'
  },
  {
    publish: false,
    publishDate: '2020-12-01',
    year: 2020,
    slug: '2020-snoqualmie-pass-by-car',
    title: 'Snoqualmie Pass by car'
  },
  {
    publish: true,
    publishDate: '2021-06-29',
    year: 2020,
    slug: '2020-parliament-and-palm-trees',
    title: 'Parliament and Palm Trees'
  },
  {
    publish: true,
    publishDate: '2020-12-01',
    year: 2020,
    slug: '2020-indexical-1',
    title: 'Indexical 1'
  },
  {
    publish: true,
    publishDate: '2020-12-01',
    year: 2020,
    slug: '2020-indexical-2',
    title: 'Indexical 2'
  },
  {
    publish: true,
    publishDate: '2020-12-01',
    year: 2019,
    slug: '2019-viewing-area',
    title: 'Viewing Area'
  },
  {
    publish: true,
    publishDate: '2023-04-27',
    year: 2020,
    slug: '2020-bedroom',
    title: 'Bedroom'
  },
  {
    publish: true,
    publishDate: '2020-12-01',
    year: 2010,
    slug: '2010-9600-meilleur',
    title: '9600 Meilleur'
  }
]

export default photographs
