import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const PostPage = props => {
  return (
    <Layout>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </Layout>
  )
}

export default PostPage

export const query = graphql`
  query($id: String!) {
    microcmsPost(id: { eq: $id }) {
      title
      postId
      content
      slug
      category {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`
