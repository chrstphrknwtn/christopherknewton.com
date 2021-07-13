import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import cx from 'classnames';
import c from 'copyright';

import ExternalLink from './external-link';
import styles from './layout.module.css';

const copyrightString = c({
  name: 'Christopher Newton',
  short: true,
  startYear: 1981
});

interface Props {
  children?: React.ReactNode;
  isIndex?: boolean;
  isSlim?: boolean;
  isWide?: boolean;
}

const navigationLinks = [
  {
    route: '/',
    label: 'photographs'
  },
  {
    route: '/about',
    label: 'about'
  }
];

const Layout = ({ children, isIndex, isSlim, isWide }: Props) => {
  const router = useRouter();

  return (
    <main
      className={cx(styles.container, {
        [styles.slim]: isSlim,
        [styles.wide]: isWide
      })}>
      <Head>
        <title>Christopher Newton</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://christopherknewton.com/rss/feed.xml"
        />
      </Head>
      <header className={styles.header}>
        {isIndex ? (
          <h1>Christopher Newton</h1>
        ) : (
          <h1>
            <Link href="/">
              <a>Christopher Newton</a>
            </Link>
          </h1>
        )}
        <ul>
          {navigationLinks.map(link => (
            <li key={link.route}>
              <Link href={link.route}>
                <a className={link.route === router.route ? styles.active : ''}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <section className={styles.content}>{children}</section>
      <footer className={styles.footer}>
        <p>
          {copyrightString} ·{' '}
          <ExternalLink href="https://github.com/chrstphrknwtn/christopherknewton.com">
            Source
          </ExternalLink>
        </p>
      </footer>
    </main>
  );
};

export default Layout;
