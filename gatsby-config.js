const isDev = process.env.NODE_ENV === 'development';

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `L'Oven Bakeshop`,
    description: `L’Oven is more than just a bakery, it is a business created specifically to train and hire people with intellectual and developmental disabilities (IDD).`,
    author: `Twyla Mount`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/loven-logo-symbol.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Dancing Script', 'Josefin Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
        host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com',
        downloadLocal: true,
      },
    },
  ],
};
