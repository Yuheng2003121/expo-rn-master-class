// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Expo React Native 大师教程',
  tagline: '从零基础到专家，完整掌握 React Native 开发',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://expo-rn-master-class.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is '/your-repo-name/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Yuheng2003121',
  projectName: 'expo-rn-master-class',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if you want your site to support Chinese
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-CN',
        label: '简体中文',
      },
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Yuheng2003121/expo-rn-master-class/tree/main/',
          routeBasePath: '/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Yuheng2003121/expo-rn-master-class/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/expo-rn-social-card.png',
      navbar: {
        title: 'Expo RN 大师课',
        logo: {
          alt: 'Expo Logo',
          src: 'img/expo-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Yuheng2003121/expo-rn-master-class',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教程',
            items: [
              {
                label: '基础篇',
                to: '/beginner/introduction',
              },
              {
                label: '进阶篇',
                to: '/intermediate/expo-architecture',
              },
              {
                label: '实战篇',
                to: '/tutorial-basics/create-a-page',
              },
              {
                label: '专家篇',
                to: '/tutorial-extras/manage-docs-versions',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Yuheng2003121/expo-rn-master-class',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/expo',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Yuheng2003121/expo-rn-master-class',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Expo React Native 大师教程. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['javascript', 'jsx', 'typescript', 'tsx', 'bash', 'json'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
