import ragtag from 'ragtag';
import c from 'copyright';

const layout = ({ title = 'Christopher Newton', content = '' }) => {
  return ragtag`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="" content="noindex, nofollow, noarchive">
      <link rel="stylesheet" href="/index.css">
      <title>${title}</title>
    </head>
    <body>
      <header>
        <h2><a href="/">Christopher Newton</a></h2>
      </header>

      <main>${content}</main>

      <footer>
        <p>${c({name:'Christopher Newton', startYear: 1981, short: true})}</p>
      </footer>
    </body>
  </html>
  `;
}

export default layout;
