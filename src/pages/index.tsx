import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pinned backend',
    emoji: '📌',
    description: (
      <>
        Ships its own tested gallery-dl build, verified against official
        checksums. Upstream changes never break your runs mid-archive.
      </>
    ),
  },
  {
    title: 'Interactive by default',
    emoji: '🧭',
    description: (
      <>
        Pick a profile, a network and content types from menus. Or paste a
        URL — site configuration is auto-matched by pattern.
      </>
    ),
  },
  {
    title: 'Session aware',
    emoji: '🍪',
    description: (
      <>
        Named cookie profiles captured straight from Firefox or Chromium,
        stored <code>0600</code>, refreshed in one click.
      </>
    ),
  },
  {
    title: 'Integrity checked',
    emoji: '🔍',
    description: (
      <>
        Every run verifies downloads: truncated videos (missing moov atom),
        orphaned .part files and HEVC codec warnings.
      </>
    ),
  },
  {
    title: 'Safe by design',
    emoji: '🛡️',
    description: (
      <>
        URL validation, protected system paths, allow-listed backend flags,
        atomic config writes with backups. No unsafe code anywhere.
      </>
    ),
  },
  {
    title: 'Live dashboard',
    emoji: '📊',
    description: (
      <>
        Full-screen TUI with per-job progress and instant Ctrl-C. Output is
        mirrored to persistent logs you can always inspect.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/scrapmf-logo-small.png"
          alt="ScrapMF logo"
          className={styles.heroLogo}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get started →
          </Link>
          <code className={styles.installCmd}>cargo install scrapmf</code>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — documentation`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        {FeatureList.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {FeatureList.map((props) => (
                  <Feature key={props.title} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
