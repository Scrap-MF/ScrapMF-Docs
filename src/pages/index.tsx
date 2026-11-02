import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({id: 'homepage.feature.pinned-backend.title', message: 'Pinned backend'}),
    emoji: '📌',
    description: (
      <Translate id="homepage.feature.pinned-backend.desc">
        Ships its own tested gallery-dl build, verified against official
        checksums. Upstream changes never break your runs mid-archive.
      </Translate>
    ),
  },
  {
    title: translate({id: 'homepage.feature.interactive.title', message: 'Interactive by default'}),
    emoji: '🧭',
    description: (
      <Translate id="homepage.feature.interactive.desc">
        Pick a profile, a network and content types from menus. Or paste a
        URL — site configuration is auto-matched by pattern.
      </Translate>
    ),
  },
  {
    title: translate({id: 'homepage.feature.session.title', message: 'Session aware'}),
    emoji: '🍪',
    description: (
      <Translate id="homepage.feature.session.desc">
        Named cookie profiles captured straight from Firefox or Chromium,
        stored 0600, refreshed in one click.
      </Translate>
    ),
  },
  {
    title: translate({id: 'homepage.feature.integrity.title', message: 'Integrity checked'}),
    emoji: '🔍',
    description: (
      <Translate id="homepage.feature.integrity.desc">
        Every run verifies downloads: truncated videos (missing moov atom),
        orphaned .part files and HEVC codec warnings.
      </Translate>
    ),
  },
  {
    title: translate({id: 'homepage.feature.safe.title', message: 'Safe by design'}),
    emoji: '🛡️',
    description: (
      <Translate id="homepage.feature.safe.desc">
        URL validation, protected system paths, allow-listed backend flags,
        atomic config writes with backups. No unsafe code anywhere.
      </Translate>
    ),
  },
  {
    title: translate({id: 'homepage.feature.dashboard.title', message: 'Live dashboard'}),
    emoji: '📊',
    description: (
      <Translate id="homepage.feature.dashboard.desc">
        Full-screen TUI with per-job progress and instant Ctrl-C. Output is
        mirrored to persistent logs you can always inspect.
      </Translate>
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
  const logoUrl = useBaseUrl('/img/scrapmf-logo-small.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={logoUrl}
          alt="ScrapMF logo"
          className={styles.heroLogo}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline" description="Hero subtitle">
            Safe, interactive archiver for social media galleries
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="homepage.getStarted">Get started →</Translate>
          </Link>
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
