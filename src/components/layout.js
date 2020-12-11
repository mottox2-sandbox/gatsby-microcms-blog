/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "minireset.css"
import "fontsource-fira-sans/700-italic.css"
import "./layout.css"
import { SideSection } from "./SideSection"
import { TagItem } from "./TagItem"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container">
        <main className="layout-main">{children}</main>
        <aside className="layout-side">
          <SideSection title="Tags">
            <TagItem>Tag1</TagItem>
            <TagItem>Tag2</TagItem>
          </SideSection>
          <SideSection title="Profile">
            <div style={{ fontSize: 12 }}>
              都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
              新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
            </div>
          </SideSection>
        </aside>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
