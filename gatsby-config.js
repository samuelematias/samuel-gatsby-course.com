require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Samuel Matias`,
    position: "Software Engineer",
    description: `Um blog de um Desenvolvedor Mobile Multiplataforma, fã do Dart, Flutter, Javascript, React Native e novas tecnologias. Amante da Musica, atualmente trabalhando no iFood e desenvolvendo umas coisas legais.`,
    descriptionEn: `A blog by a Cross Platform Mobile Developer, fan of Dart, Flutter, Javascript, React Native and new technologies. Music lover, currently working on iFood and developing some cool stuff.`,
    siteUrl: `https://samuelematias.com`,
    image: "https://samuelematias.com/assets/img/og-image.png",
    author: {
      name: "Samuel Matias",
      minibio: `Revolucionando o Universo da Alimentação no iFood, escrevo sobre Tecnologia, Diversidade, algumas vezes sobre minha vida pessoal e mais.`,
    },
    organization: {
      name: "Samuel Matias",
      url: "https://samuelematias.com",
      logo: "https://samuelematias.com/assets/img/samuelematias-icon.png",
    },
    social: {
      twitter: `samuelematias`,
      twitterLink: `https://twitter.com/samuelematias`,
      linkedinLink: `https://www.linkedin.com/in/samuelematias/`,
      githubLink: `https://github.com/samuelematias`,
      mediumLink: `https://medium.com/@samuelematias`,
    },
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, //if you need delete some post and update the algolia search or add some new field on createPages query, set this prop for FALSE, after everything is updated, change this prop value to TRUE
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "pt-br",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Matias`,
        short_name: `samuelematias`,
        start_url: `/`,
        background_color: `#1d1d1d`,
        theme_color: `#0e1111`,
        display: `Fullscreen`,
        icon: `static/assets/img/samuelematias-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
