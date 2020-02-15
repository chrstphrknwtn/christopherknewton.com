export default ({ className, href, title, text }) => `
<a rel="noopener noreferrer" target="_blank" ${className ? `class="${className}"` : ''} href="${href}" ${title ? `title="${title}"` : ''}>${text}</a>
`;
