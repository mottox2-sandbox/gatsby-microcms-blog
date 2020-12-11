import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostCell } from "../components/PostCell"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    {props.data.allMicrocmsPost.nodes.map((node, i) => {
      return (
        <div style={{ marginBottom: 24 }} key={i}>
          <PostCell post={node} />
        </div>
      )
    })}
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
