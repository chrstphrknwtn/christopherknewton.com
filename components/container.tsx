import Link from 'next/link';
import cx from 'classnames';
import c from 'copyright';

import ExternalLink from './external-link';
import styles from './container.module.css';

const copyrightString: any = c({
  name: 'Christopher Newton',
  short: true,
  startYear: 1981,
});

interface Props {
  children?: React.ReactNode;
  isIndex?: boolean;
  isWide?: boolean;
}

const Container = ({ children, isIndex, isWide }: Props) => (
  <main className={cx(styles.container, { [styles.wide]: isWide })}>
    <header className={styles.header}>
      {isIndex ? (
        <h1>Christopher Newton</h1>
      ) : (
        <h2>
          <Link href="/">
            <a>Christopher Newton</a>
          </Link>
        </h2>
      )}
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

export default Container;
