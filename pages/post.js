import ragtag from 'ragtag';
import { createClient } from 'contentful';

import layout from '../components/layout';

import keys from '../keys.json';

const contentfulClient = createClient(keys);

const content = ragtag`
<article class="post">

  <section class="post--meta">
    <span class="subhead">Blog</span>
    <span class="subhead">13 February 2020</span>
  </section>

  <section class="post--body">
    
  </section>

</article>
`;

export default (req, res) => {
  res.send(layout({ content }));
};
