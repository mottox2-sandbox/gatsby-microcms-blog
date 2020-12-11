import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const { allMicrocmsCategory } = useStaticQuery(
    graphql`
      query {
        allMicrocmsCategory {
          nodes {
            slug
            name
          }
        }
      }
    `
  )
  const categories = allMicrocmsCategory.nodes

  return (
    <header className="header">
      <div className="container">
        <ul className="categories">
          {categories.map(category => {
            return (
              <li className="category" key={category.name}>
                <Link to={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <img src="/github.png" width="32" height="32" />
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
