import * as React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  href: string;
  title?: string;
}

const ExternalLink = ({ className, children, href, title }: Props) => (
  <a
    rel="noopener noreferrer"
    target="_blank"
    className={className ? className : ''}
    href={href}
    title={title ? title : ''}>
    {children}
  </a>
);

export default ExternalLink;
