import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const RecentPostsWidget = () => {
  const { posts } = useStaticQuery(graphql`
    query GetRecentPosts {
      posts: allWpPost(limit: 10) {
        nodes {
          title
          slug
        }
      }
    }
  `)

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
