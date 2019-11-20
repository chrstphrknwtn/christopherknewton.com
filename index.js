import ragtag from 'ragtag';

const links = [
  { title: '0x002b.com - Photo tumblr', url: 'https://0x002b.com' },
  { title: '0x001a.com - Graphic tumblr', url: 'https://0x001a.com' }
];

export default (req, res) => {
  res.send(ragtag`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="" content="noindex, nofollow, noarchive">
      <link rel="stylesheet" href="/index.css">
      <title>Christopher Newton</title>
    </head>
    <body>
      <h1>Christopher Newton</h1>
      <ul>
        ${links.map(link => ragtag`<li><a target="_blank" href="${link.url}">${link.title}</a></li>`)}
      </ul>
    </body>
    </html>
  `);
}
