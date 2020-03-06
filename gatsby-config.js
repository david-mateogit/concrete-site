module.exports = {
  siteMetadata: {
    title: `RUTRA'S CONCRETE LLC`,
    description: `Rutra's Concrete, LLC. specializes in all types of concrete masonry construction. We are fully staffed, and able to handle any-size project.`,
    author: `David Mateo`,
    siteUrl: `https://www.rutrasconcrete.netlify.com`,
    socialLinks: {
      instagram: `https://www.instagram.com/rutrasconcrete/`,
      email: `rutracardoso@hotmail.com`,
      phone: `18609495044`,
      address: `Rutra’s Concrete, LLC
              20 Kendall Rd.
              Preston, CT 06365`,
    },
    keywords: `['masonry', 'contractor', 'concrete', 'construction']`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.rutrasconcrete.netlify.com",
        sitemap: "https://www.rutrasconcrete.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-csp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rutras-concrete`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "rutrasconcrete",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/images/bg/`, // wherever background images are stored
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["400", "400i", "700", "700i"],
            subsets: ["latin-ext"],
          },
        ],
        formats: ["woff", "woff2"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
