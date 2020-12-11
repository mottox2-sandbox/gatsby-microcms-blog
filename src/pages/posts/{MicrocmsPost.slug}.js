import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { PostCell } from "../../components/PostCell"

const PostPage = props => {
  const post = props.data.microcmsPost
  const { title, content } = post
  return (
    <Layout>
      <SEO title={title} />
      <PostCell post={post} />
      <div
        style={{
          margin: "20px 0 60px",
          fontSize: 15,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
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
