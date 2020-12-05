import React from "react"
import { Link } from "gatsby"

export const PostCell = (props: any) => {
  const { title, content, publishedAt, postId } = props.post
  return (
    <Link to={`/posts/${postId}`}>
      <div>
        {title}
        <time style={{ marginLeft: 8 }}>{publishedAt}</time>
      </div>
    </Link>
  )
}
