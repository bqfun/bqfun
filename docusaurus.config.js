/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BQ FUN',
  tagline: 'BigQuery中毒者へ',
  url: 'https://bqfun.jp',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'bqfun', // Usually your GitHub org/user name.
  projectName: 'bqfun', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BQ FUN',
      logo: {
        alt: 'BQ FUN Logo',
        src: 'img/logo.svg',
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
  },
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
