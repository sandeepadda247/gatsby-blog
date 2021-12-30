import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data, location }) => {
  console.log("HERE IAM", data)
  const siteTitle = data.site.siteMetadata.title
  const getCategoryPosts = category => {
    const { allWpCategory } = data
    return allWpCategory.edges.filter(c => c.node.name === category)[0]["node"][
      "posts"
    ]["nodes"]
  }

  const renderPosts = (category, count = 12) => {
    return getCategoryPosts(category).map((p, i) => {
      if (i > count) return null
      return (
        <li>
          <Link to={`/${p.slug}`}>{p.title}</Link>
        </li>
      )
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home Page" />
      <p>
        <strong>Sarkari Jobs 2020</strong> including SSC,{" "}
        <Link to="/bank-jobs">Banking Jobs</Link>, Railway Jobs, UPSC/Civil Jobs
        are provided. The portal has complete information about all Sarkari
        Jobs, its latest recruitment notifications, from all state and national
        level jobs and their updates. These exams and jobs are regularly updated
        as per official information available. Check{" "}
        <strong>latest Sarkari Jobs</strong> here.
      </p>

      <h3>Trending</h3>
      <ul className="">{renderPosts("Trending", 6)}</ul>
      <h3>Sarkari Job Notification</h3>
      <ul className="">{renderPosts("Job Alert")}</ul>
      <h3>Results</h3>
      <ul className="">{renderPosts("Results")}</ul>
      <h3>Admit Cards </h3>
      <ul className="">{renderPosts("Admit Cards")}</ul>
      <h3>Cut-Off</h3>
      <ul className="">{renderPosts("Cut-Off")}</ul>
      <h3>Answer Key</h3>
      <ul className="">{renderPosts("Answer Key")}</ul>
      <h3>Syllabus &amp; Exam Pattern</h3>
      <ul className="">{renderPosts("Syllabus")}</ul>
      <h3>Salary</h3>
      <ul className="">{renderPosts("Salary")}</ul>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allWpCategory(
      limit: 10
      filter: {
        name: {
          in: [
            "Trending"
            "Job Alert"
            "Results"
            "Admit Cards"
            "Cut-Off"
            "Answer Key"
            "Syllabus"
            "Salary"
          ]
        }
      }
    ) {
      totalCount
      edges {
        node {
          id
          name
          posts {
            nodes {
              title
              slug
              dateGmt(fromNow: true)
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              content
            }
          }
        }
      }
    }
  }
`
