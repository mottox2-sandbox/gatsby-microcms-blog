import React from "react"
import { graphql } from "gatsby"

const PostPage = props => {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>
}

export default PostPage

export const query = graphql`
  query($id: String!) {
    microcmsPost(id: { eq: $id }) {
      title
      postId
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
