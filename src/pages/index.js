import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostCell } from "../components/PostCell"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <pre>{JSON.stringify(props.data, null, 2)}</pre>
    {props.data.allMicrocmsPost.nodes.map(node => {
      return <PostCell post={node} />
    })}
  </Layout>
)

export const query = graphql`
  query allPost {
    allMicrocmsPost {
      nodes {
        title
        content
        postId
        publishedAt
        postPath: gatsbyPath(filePath: "/posts/{microcmsPost.postId}")
      }
    }
  }
`

export default IndexPage
