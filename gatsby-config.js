require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    FUNCTIONS: true,
  },
  siteMetadata: {
    url: "https://www.maduforchiemeka.com",
    siteUrl: "https://www.maduforchiemeka.com",
    title: "Madufor Chiemeka's Portfolio",
    description: `Madufor Chimeka's portfolio site created using GatsbyJS.`,
    author: "Madufor Chiemeka",
    image: "https://i.ibb.co/hL4ymKg/icon.png",
    keywords:
      "Madufor, Chiemeka, Reynolds, Madufor Chiemeka Reynolds, elcozy, Madufor Chiemeka, Frontend developer, Madufor Reynolds, fonmand, Reynolds, frontend, front-end, el_cozy, freelancer",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-TX2X6DQEKM",
      },
    },

    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
