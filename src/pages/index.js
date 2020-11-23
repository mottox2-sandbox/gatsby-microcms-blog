import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <pre>
      {JSON.stringify(props.data, null, 2)}
    </pre>
    {
      props.data.allMicrocmsPost.nodes.map(node => {
        return <Link to={node.postPath}>{node.title}</Link>
      })
    }
  </Layout>
)

export const query = graphql`
  query allPost {
    allMicrocmsPost {
      nodes {
        title
        postId
        postPath: gatsbyPath(filePath: "/posts/{microcmsPost.postId}")
      }
    }
  }
`

export default IndexPage
