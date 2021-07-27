require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Johnny D. Fitness`,
    slogan: `Building the best you.`,
    description: `Welcome to Johnny D. Fitness! I offer nutrional dietary plans and will soon be selling merchandise on my site. Let's build the best you!`,
    author: `@brienpacholec`,
    siteUrl: `https://brienpacholec.com/`,
    menuLinks: [
      {
        name:'Fitness',
        link:'/fitness'
      },
      {
        name:'Nutrition',
        link:'/nutrition'
      },
      {
        name:'Social Media',
        link:'/social'
      },
      {
        name:'Contact',
        link:'/contact'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //STRIPE API
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product','Sku','Price'],
        secretKey: `${process.env.STRIPE_SECRET_KEY}`, //SECRET KEY
        downloadFiles: true,
      },
    },
    //ENVRIONMENT VARIABLES API
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["STRIPE_PUBLISHABLE_KEY", "STRIPE_SECRET_KEY"]
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
