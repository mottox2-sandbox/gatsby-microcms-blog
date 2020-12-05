import React from "react"
import { graphql } from "gatsby"

const CategoryTemplate = props => {
  const posts = props.data.allMicrocmsPost.nodes
  return (
    <p>
      {posts.map(post => {
        return <div>{JSON.stringify(post, null, 2)}</div>
      })}
    </p>
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
