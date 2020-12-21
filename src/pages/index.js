import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <PostList posts={props.data.allMicrocmsPost.nodes} />
    <pre>{JSON.stringify(props.data, null, 2)}</pre>
  </Layout>
)

export const query = graphql`
  query allPost {
    allMicrocmsPost {
      nodes {
        title
        content
        postId
        slug
        publishedAt
        category {
          name
        }
        thumbnail {
          url
        }
        postPath: gatsbyPath(filePath: "/posts/{microcmsPost.slug}")
      }
    }
  }
`

export default IndexPage
