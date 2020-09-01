module.exports = {
  siteMetadata: {
    siteTitle: `AKAIBU CCNA`,
    defaultTitle: `AKAIBU CCNA`,
    siteTitleShort: ``,
    siteDescription: `Learn CCNA`,
    siteUrl: `https://akaibu-ccna.netlify.app/`,
    siteAuthor: `@AT`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#EC5D0A`,
    basePath: `/`,
    footer: `Made with ❤️ 2020`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/tungandy/akaibu-ccna`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
