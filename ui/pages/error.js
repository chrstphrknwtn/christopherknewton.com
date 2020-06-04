import document from '../components/document';

export default message => document({ content: message ? message : 'Whoops... something is broken.' });
