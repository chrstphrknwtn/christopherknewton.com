export default ({ className, href, title }) => `
<a ${className ? `class="${className}"` : ''} rel="noopener noreferrer" target="_blank" href="${href}">${title}</a>
`;
