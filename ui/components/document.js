import ragtag from 'ragtag';
import c from 'copyright';
import externalLink from '../elements/external-link';

const document = ({ title, content, isIndex, isPreview, hasWideContent, hasMaxWidthContent } = {}) => ragtag`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="robots" content="${isPreview ? 'noindex, nofollow' : 'index, follow'}, noarchive">
      <meta name="description" content="Melbourne-based freelance UI Developer with a background in design">
      <meta name="keywords" content="freelance, ui, user, interface, ux, experience, developer, frontend, front, end, melbourne">
      <link rel="stylesheet" href="/static/index.css">
      <title>${title && `${title} · `}Christopher Newton</title>
    </head>
    <body>
      <main class="${hasWideContent ? 'wide' : (hasMaxWidthContent ? 'max-width-content' : '')}">
        <header class="site-header responsive-container">
          ${isIndex ? ('<h1>Christopher Newton</h1>') : (ragtag`<h2><a href="/${isPreview && '?preview=1'}">Christopher Newton</a></h2>`)}
        </header>
        <section class="site-content responsive-container">
          ${content}
        </section>
        <footer class="site-footer responsive-container">
          <p>${c({ name: 'Christopher Newton', short: true, startYear: 1981 })} · ${externalLink({ href: 'https://github.com/chrstphrknwtn/christopherknewton.com', text: 'Source' })}</p>
        </footer>
      </main>
    </body>
  </html>
`;

export default document;
