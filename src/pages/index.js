import React from "react"
import Template from "../templates/blog-template"

export default function IndexPage({ data }) {
  let latestPost = data.markdown.edges[0].node
  return <Template data={{ markdown: latestPost }} />;
}

export const pageQuery = graphql`
  query {
    markdown: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
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
