import React from "react"
import WithSideBar from "../components/with-sidebar";
import { Link } from "gatsby"

export default function Archive({ data }) {
  const { markdown } = data
  const { edges } = markdown
  return (<WithSideBar>
    <h1>Archive</h1>
    {edges.map(edge => (
      <div className="mb-8">
        <h4>{edge.node.frontmatter.date_string}</h4>
        <Link to={edge.node.frontmatter.path} className="floating-outline">{edge.node.frontmatter.title}</Link>
      </div>
    ))}
    
  </WithSideBar>)
}

export const pageQuery = graphql`
  query {
    markdown: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            date_string
            path
            title
            category
          }
        }
      }
    }
  }
`
