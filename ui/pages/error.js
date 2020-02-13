import document from '../components/document';

export default message => document({ content: message ? message : 'Whoops... Something is broken.' });
