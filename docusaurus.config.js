// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convergent Facilitation',
  tagline: 'Finding a solution that works for everyone',
  favicon: 'img/convergentfacilitation_logo.png',


  // Set the production url of your site here
  url: 'https://convergentfacilitation.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, 
		  //docs: {
          //sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
       // },
       blog: {
        path: 'case-studies',
        routeBasePath: '/case-studies',
        blogSidebarTitle: 'All Case Studies',
        blogTitle: 'Convergent Facilitation Case Studies',
        blogDescription: 'Convergent Facilitation Case Studies',
        authorsMapPath: '../facilitators.yml',
        showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:  'https://github.com/Convergent-Facilitation/convergentfacilitation.org/tree/main',
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
      // Replace with your project's social card
//      image: 'img/docusaurus-social-card.jpg',
	
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },


      navbar: {
        hideOnScroll: false,
        title: 'Convergent Facilitation',
        logo: {
          alt: 'Convergent Facilitation Logo',
          src: 'img/convergentfacilitation_logo.png'
        },
        items: [
      //    { label: 'What is CF', to: 'about', position: 'left' },
	  { label: 'Overview', href: '/', position: 'left' },
	  //{ label: 'Get Support', to: '/get-support', position: 'left' },
	  { label: 'Case Studies', to: '/case-studies', position: 'left' },
          {
            type: 'dropdown',
            label: 'Learn more',
            position: 'left',
            items: [
              {
				  label: 'Introductory Course Mar 2024',
                to: '/intro-course-paul-verene-march-2024'
              },
              {
				  label: 'Advanced Training (grow.CF.org)',
                href: 'https://grow.convergentfacilitation.org'
              },
              {
				  label: 'Book: Highest Common Denominator',
                href: 'https://thefearlessheart.org/store/the-highest-common-denominator/'
              },
              {
                label: 'Primer (Handout)',
                href: 'https://thefearlessheart.org/item/organizational-collaboration-primer-packet/'
              },
            ]
          },
       //   {
        //    type: 'search',
         //   position: 'right'
         // },
          { label: 'Support Our Work', to: '/support-our-work', position: 'right' },
          { label: 'Contact', to: 'contact', position: 'right' }

        ]
      }, footer: {
		  style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
//              {
//                label: 'What is CF',
//                to: '/what-is-cf'
//              },
              {
                label: 'Case Studies',
                to: '/case-studies'
              },
              {
                label: 'Book: Highest Common Denominator',
                href: 'https://thefearlessheart.org/store/the-highest-common-denominator/'
              },
              {
                label: 'CF Handout',
                href: 'https://thefearlessheart.org/item/organizational-collaboration-primer-packet'
              },
            ]
          },
          {
            title: 'Engage',
            items: [
//              {
//                label: 'Get Support',
//                to: '/get-support'
//              },
//              {
//                label: 'Mission',
//                to: '/mission'
//              },
              {
                label: 'Newsletter',
                to: '/contact#stay-informed-with-our-cf-in-the-world-newsletter'
              },
              {
                label: 'Support Our Work',
                to: '/give'
              },
              {
                label: 'CF Intro Course Mar 2024',
				to: '/intro-course-paul-verene-march-2024'
              },
              {
                label: 'CF Learning Community (grow)',
                href: 'https://grow.convergentfacilitation.org'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                to: '/contact'
              },
              { label: 'NGL Community',
                href: 'https://nglcommunity.org'
              },
              { label: 'Github',
                href: 'https://github.com/Convergent-Facilitation/convergentfacilitation.org'
              },
              {
                label: 'Privacy',
                to: '/privacy'
              },
              {
                label: 'Terms',
                to: '/terms'
              },

            ]
          },
        ],
        copyright: `Convergent Facilitation ${new Date().getFullYear()}. Built with Docusaurus.`

      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false
      }
    ],
  ]
};

export default config;
