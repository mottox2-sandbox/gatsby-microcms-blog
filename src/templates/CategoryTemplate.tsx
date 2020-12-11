import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const CategoryTemplate = props => {
  const posts = props.data.allMicrocmsPost.nodes
  return (
    <Layout>

    <p>
      {posts.map(post => {
        return <div>{JSON.stringify(post, null, 2)}</div>
      })}
    </p>
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($categoryId: String!) {
    allMicrocmsPost(filter: { category: { id: { eq: $categoryId } } }) {
      nodes {
        id
        title
        postId
        publishedAt
      }
    }
  }
`
