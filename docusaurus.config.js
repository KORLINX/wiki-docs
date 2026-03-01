// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KORLINX Wiki',
  tagline: 'AIoT Connectivity Solutions',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://www.korlinx.com/',
  baseUrl: '/',

  organizationName: 'KORLINX',
  projectName: 'wiki-dev',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },
      ko: {
        label: '한국어',
        htmlLang: 'ko',
      },
    },
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'ko'],
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: './sidebarsTutorials.js',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'KORLINX Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Products',
            position: 'left',
            items: [
              { label: 'Network', to: '/docs/Network/Network_Intro' },
            ],
          },
          {
            label: 'Tutorials',
            to: '/tutorials/Tutorials_Intro',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/KORLINX',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              { label: 'Network Overview', to: '/docs/Network/Network_Intro' },
              { label: 'Cellular', to: '/docs/Network/Cellular/Cellular_Intro' },
              { label: 'LPWAN', to: '/docs/Network/LPWAN/LPWAN_Intro' },
              { label: 'WiFi', to: '/docs/Network/WiFi/WiFi_Intro' },
              { label: 'Bluetooth', to: '/docs/Network/Bluetooth/Bluetooth_Intro' },
              { label: 'Ethernet', to: '/docs/Network/Ethernet/Ethernet_Intro' },
              { label: 'Satellite', to: '/docs/Network/Satellite/Satellite_Intro' },
            ],
          },
          {
            title: 'Learn',
            items: [
              { label: 'Tutorials', to: '/tutorials/Tutorials_Intro' },
              { label: 'Blog', to: '/blog' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'KORLINX.com', href: 'https://www.korlinx.com' },
              { label: 'GitHub', href: 'https://github.com/KORLINX' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KORLINX, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
