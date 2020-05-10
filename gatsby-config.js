require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'YTNkZTNhZDMtYWViNi00OGM0LWIxNjQtZGEyYzkyMThiNDRiNjM3MjQ2ODkzNDAzNDA2MDg5',
        autopop: true
      }
    },
  ],
}
