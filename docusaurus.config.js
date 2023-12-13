// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convergent Facilitation',
  tagline: 'Finding a solution that work for everyone',
  favicon: 'img/convergentfacilitation_logo.png',


  // Set the production url of your site here
  url: 'https://convergentfacilitation.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
		blog: false,
       //blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
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
          {
            type: 'dropdown',
            label: 'Case Studies',
            position: 'left',
            items: [
              {
				  label: 'Preschool Governance (amares)',
                to: '/case-studies/amares-preschool-governance-structure'
              },
              {
                label: 'Child Custody (Minnesota State Legislature) (PDF)',
                href: '/files/child-custory-minnesota-cf-case-study.pdf',
				target: '_blank'

              },
            ]
          },
	//	  { label: 'Mission', to: '/mission', position: 'left' },
          {
            type: 'dropdown',
            label: 'Learn more',
            position: 'left',
            items: [
              {
				  label: 'Book: Highest Common Denominator',
                to: 'https://thefearlessheart.org/store/the-highest-common-denominator/'
              },
              {
                label: 'CF Handout',
                to: 'https://thefearlessheart.org/item/organizational-collaboration-primer-packet/'
              },
             // {
              //  label: 'Intro Courses',
               // to: 'cf-intro-courses'
             // },
              {
                label: 'Learning Community (Grow CF)',
                to: 'https://grow.convergentfacilitation.org'
              },
              {
                label: 'Newsletter',
                to: 'contact#stay-in-the-loop'
              }
            ]
          },
       //   {
        //    type: 'search',
         //   position: 'right'
         // },
          { label: 'Support Our Work', to: '/support-our-work', position: 'right' },
          { label: 'Contact', to: 'contact', position: 'right' }

        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Process and Impact',
            items: [
              {
                label: 'What is CF',
                to: '/engage/what-can-you-do'
              },
              {
                label: 'Case Studies',
                to: '/engage/apply-and-apprentice/join-hylo'
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
              {
                label: 'Get Support',
                to: '/services'
              },
              {
                label: 'Mission',
                to: '/mission'
              },
              {
                label: 'Support Our Work',
                to: '/give'
              },
              {
                label: 'Introductory courses',
				to: '/cf-intro-courses'
              },
              {
                label: 'Grow CF Capacity in Community',
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
              {
                label: 'Blog',
                to: 'blog'
              },
              {
                label: 'Newsletter',
                to: '/contact#stay-in-the-loop'
              },
              { label: 'NGL Community',
                href: 'https://nglcommunity.org'
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
