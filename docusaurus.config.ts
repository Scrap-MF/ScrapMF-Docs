import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// TODO(domino-real): sustituir por el dominio definitivo en estos 3 sitios:
//   1. `url` (abajo)
//   2. static/CNAME
//   3. DNS del proveedor del dominio (CNAME -> Scrap-MF.github.io o registros A de Pages)
const SITE_URL = 'https://Scrap-MF.github.io';

const config: Config = {
  title: 'ScrapMF',
  tagline: 'Safe, interactive archiver for social media galleries',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: SITE_URL,
  // Custom domain => served from the root path
  baseUrl: '/ScrapMF-Docs/',

  // GitHub pages deployment config.
  organizationName: 'Scrap-MF',
  projectName: 'ScrapMF-Rust-CLI',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English'},
      es: {label: 'Español'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      // The CLI aesthetic is terminal-dark; keep dark by default but let
      // users override.
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ScrapMF',
      logo: {
        alt: 'ScrapMF',
        src: 'img/scrapmf-logo-small.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Scrap-MF/ScrapMF-Rust-CLI',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/intro',
            },
            {
              label: 'CLI reference',
              to: '/docs/cli-reference/scrape',
            },
            {
              label: 'Configuration',
              to: '/docs/configuration/overview',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'ScrapMF-CLI on GitHub',
              href: 'https://github.com/Scrap-MF/ScrapMF-Rust-CLI',
            },
            {
              label: 'Releases',
              href: 'https://github.com/Scrap-MF/ScrapMF-Rust-CLI/releases',
            },
            {
              label: 'Report an issue',
              href: 'https://github.com/Scrap-MF/ScrapMF-Rust-CLI/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scrap-MF. GPL-3.0. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'toml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
