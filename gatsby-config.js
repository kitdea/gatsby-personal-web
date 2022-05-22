/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
 
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    
    {
      resolve: `gatsby-transformer-sharp`, // Needed for dynamic images
       options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectsportfolio`,
        path: `${__dirname}/src/projectsportfolio/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'fmR',
    description: 'web dev portfolio',
    copyright: '2022 Copyright',
    contact: 'email@example.com'
  }
  
}
