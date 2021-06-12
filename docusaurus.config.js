/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BQ FUN',
  favicon: 'img/favicon.ico',
  url: 'https://bqfun.jp',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  tagline: 'BigQuery中毒者へ',
  organizationName: 'bqfun', // Usually your GitHub org/user name.
  projectName: 'bqfun', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    image: 'img/bqfun.png',
    navbar: {
      title: 'BQ FUN',
      logo: {
        alt: 'BQ FUN Logo',
        src: 'img/bqfun.png',
      },
      items: [
        {
          href: 'https://github.com/bqfun/bqfun',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://bqfun.slack.com',
          label: 'Slack',
          position: 'right',
        },
        {
          href: 'https://trello.com/b/EHyZuRFS/bq-fun-issues',
          label: 'Trello',
          position: 'right',
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-156581645-4',
    },
  },
  plugins: ['@docusaurus/plugin-google-analytics'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bqfun/bqfun/edit/main/',
          routeBasePath: '/',
        },
      },
    ],
  ],
};
