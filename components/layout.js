import ragtag from 'ragtag';
import c from 'copyright';

const introMarkup = '<p>I\'m a Melbourne-based freelance <strong>UI Developer</strong> with a background in design. I\'ve been building user interfaces and user experience prototypes for five years. These days I focus on web apps in <a target="_blank" href="https://reactjs.org">React</a> and <a target="_blank" href="https://nextjs.org">Next.js</a>.</p>';

const layout = ({ title = 'Christopher Newton', content = '', isIndex = false } = {}) => ragtag`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="robots" content="index, follow, noarchive">
      <meta name="description" content="Melbourne-based freelance UI Developer with a background in design">
      <meta name="keywords" content="freelance, ui, user, interface, ux, experience, developer, frontend, front, end, melbourne">
      <link rel="stylesheet" href="/static/index.css">
      <title>${title}</title>
    </head>
    <body>
      <main>
        <header class="site-header">
          <h2><a href="/">Christopher Newton</a>${!isIndex && '<span> · UI Developer</span>'}</h2>
          ${isIndex && introMarkup}
        </header>
        <section class="site-content">
          ${content}
        </section>
        <footer class="site-footer">
          <p>${c({ name: 'Christopher Newton', short: true })}</p>
        </footer>
      </main>
    </body>
  </html>
`;

export default layout;
