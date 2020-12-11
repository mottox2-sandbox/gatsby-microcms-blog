import React from "react"

export const TagItem = props => {
  return (
    <div
      style={{
        fontSize: 12,
        display: "inline-block",
        border: "1px solid #eee",
        padding: "2px 12px",
        borderRadius: 2,
        marginRight: 6,
        backgroundColor: "#fff",
      }}
    >
      {props.children}
    </div>
  )
}
