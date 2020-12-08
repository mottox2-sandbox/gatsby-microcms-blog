import React from "react"
import { Link } from "gatsby"

export const PostCell = (props: any) => {
  const { title, content, publishedAt, postId } = props.post
  const plainContent = content.replace(/(<([^>]+)>)/gi, "")
  return (
    <Link to={`/posts/${postId}`}>
      <div>
        {title}
        <p>{plainContent}</p>
        <time>{publishedAt}</time>
      </div>
    </Link>
  )
}
