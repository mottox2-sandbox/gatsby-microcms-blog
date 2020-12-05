import React from "react"
import { graphql } from "gatsby"

const TagTemplate = props => {
  console.log(props)
  const tag = props.data.microcmsTag
  const posts = props.data.allMicrocmsPost.nodes
  return (
    <p>
      <h1>{tag.name}</h1>
      {posts.map(post => {
        return <div>{JSON.stringify(post, null, 2)}</div>
      })}
    </p>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tagId: String!) {
    microcmsTag {
      name
    }
    allMicrocmsPost(filter: { tags: { elemMatch: { id: { eq: $tagId } } } }) {
      nodes {
        id
        title
        postId
        publishedAt
      }
    }
  }
`
