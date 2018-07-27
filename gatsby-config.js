module.exports = {
  siteMetadata: {
    title: 'Git Flow Workshop',
    author: 'adeen-s',
    profile: 'https://github.com/adeen-s'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/profiles`,
        name: 'profiles',
      },
    },
  ]
}
