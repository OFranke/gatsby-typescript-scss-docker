const path = require('path')
const globImporter = require('node-sass-glob-importer')
module.exports = {
  siteMetadata: {
    siteName: `Gatsby Typescript Boilerplate Project`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: ['@import "main.scss";'],
        includePaths: ['src/styles'],
        postCssPlugins: [
          require('autoprefixer')({
            grid: true,
          }),
        ],
        importer: globImporter(),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles')
      },
    },
  ],
}
