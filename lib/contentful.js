import { createClient } from 'contentful';
import keys from '../keys.json';

const contentful = createClient(keys);
const contentfulPreview = createClient({
  space: keys.space,
  accessToken: keys.previewAccessToken,
  host: 'preview.contentful.com'
});

export default contentful;
export { contentfulPreview };
