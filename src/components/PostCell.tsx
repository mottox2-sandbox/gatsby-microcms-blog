import React from "react"
import { Link } from "gatsby"
import styles from "./PostCell.module.css"

export const PostCell = (props: any) => {
  const { title, content, category, publishedAt, slug, thumbnail } = props.post
  const plainContent = content.replace(/(<([^>]+)>)/gi, "")
  console.log(props.post)
  return (
    <Link to={`/posts/${slug}`} className={styles.container}>
      <div className={styles.thumbnailWrapper}>
        <img src={thumbnail?.url} />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{category?.name}</p>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{plainContent}</p>
        <time className={styles.publishedAt}>{publishedAt}</time>
      </div>
    </Link>
  )
}
