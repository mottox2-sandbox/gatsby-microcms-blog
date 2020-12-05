/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

/** @type import('gatsby').GatsbyNode['createPages'] */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allMicrocmsTag {
        nodes {
          id
          name
          tagId
        }
      }
    }
  `)

  if (result.errors) {
    return reporter.error(result.errors)
  }

  console.log(result.data)
  const tags = result.data.allMicrocmsTag.nodes
  tags.map(tag => {
    console.log(tag)
    createPage({
      path: `/tags/${tag.tagId}`,
      component: path.resolve("./src/templates/TagTemplate.tsx"),
      context: { tagId: tag.tagId },
    })
  })
}
