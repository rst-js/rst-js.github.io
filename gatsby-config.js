module.exports = {
  siteMetadata: {
    title: "reStructuredText for JavaScript"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    // {
    //   resolve: "gatsby-plugin-rst",
    //   options: {
    //     layout: require.resolve("./src/ui/DocumentationPage.tsx")
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: "docs",
    //     path: `${__dirname}/src/docs`
    //   }
    // },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          ui: "./ui"
        }
      }
    }
  ]
}
