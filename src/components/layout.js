import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import RecentPostsWidget from "./recent-posts"
import Menu from "./Menu"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <header className="global-header">
        <div className="container global-wrapper flex space-between">
          <Link to="/">
            <img src="https://www.adda247.com/jobs/wp-content/uploads/2021/06/29110728/adda-logo-e1624949526181.png" />
          </Link>
          <Menu />
        </div>
      </header>
      <div
        className="container global-wrapper main flex"
        data-is-root-path={isHomePage}
      >
        <main className="content-area">{children}</main>
        <div className="recent-post">
          <RecentPostsWidget />
        </div>
      </div>
      <footer>
        <div className="container center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </div>
      </footer>
    </>
  )
}

export default Layout
