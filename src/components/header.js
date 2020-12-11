import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <ul className='categories'>
        <li className='category'>
          開発
        </li>
        <li className='category'>
          デザイン
        </li>
        <li className='category'>
          雑記
        </li>
      </ul>
      <img src="/github.png" width='32' height='32' />
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
