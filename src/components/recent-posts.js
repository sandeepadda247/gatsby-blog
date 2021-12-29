import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const RecentPostsWidget = () => {
  const { posts } = useStaticQuery(graphql`
    query GetRecentPosts {
      posts: allWpPost(limit: 5) {
        nodes {
          title
          slug
        }
      }
    }
  `)

  console.log("herei am", posts)
  return (
    <section id="recent-posts-2" className="widget widget_recent_entries">
      <h2 className="widget-title">Recent Posts</h2>
      <ul>
        {posts.nodes.length
          ? posts.nodes.map(post => (
              <li key={post.slug}>
                <Link to={`/${post.slug}`}>{post.title}</Link>
              </li>
            ))
          : null}
      </ul>
    </section>
  )
}

export default RecentPostsWidget

/*import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const RECENT_POSTS_QUERY = graphql`
  query GetRecentPosts {
    query {
      posts(first: 5) {
        nodes {
          title
          slug
        }
      }
    }
  }
`

const RecentPostsWidget = () => (
  <StaticQuery
    query={RECENT_POSTS_QUERY}
    render={data => {
      const { posts } = data.wpgraphql
      return (
        <section id="recent-posts-2" className="widget widget_recent_entries">
          <h2 className="widget-title">Recent Posts</h2>
          <ul>
            {posts.nodes.length
              ? posts.nodes.map(post => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))
              : null}
          </ul>
        </section>
      )
    }}
  />
)

export default RecentPostsWidget*/
