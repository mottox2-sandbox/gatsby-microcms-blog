module.exports = {
  siteMetadata: {
    title: `My Gatsby Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: "https://example.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "tag",
          },
          {
            endpoint: "category",
          },
        ],
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `{
              allMicrocmsPost(limit: 10, sort: {fields: publishedAt, order: DESC}) {
                nodes {
                  title
                  content
                  slug
                  publishedAt
                }
              }
            }`,
            serialize: ({ query }) => {
              const { allMicrocmsPost } = query
              return allMicrocmsPost.nodes.map(post => {
                console.log(post)
                return {
                  title: post.title,
                  description: post.content,
                  date: post.publishedAt,
                  url: `https://example.com/posts/${post.slug}`,
                }
              })
            },
            output: "/rss.xml",
            title: "Gatsby Blog",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
