import React from "react"
import WithSideBar from "../components/with-sidebar"

export default function Template({ data }) {
  const { markdown } = data
  if (markdown.hasOwnProperty("edges")) {
    var html = data.markdown.edges[0].node.html
    var frontmatter = data.markdown.edges[0].node.frontmatter
  }
  else {
    var html = markdown.html
    var frontmatter = markdown.frontmatter;
  }
  const fmtHtml2 = html.replace(/<ul/g, "<ul className='list-disc'").replace(/<h3/g, "<br /><h3")
  return (
    <WithSideBar showMore={true}>
      <h1>{frontmatter.title}</h1>
      <h4>{frontmatter.date_string}</h4>
      <div dangerouslySetInnerHTML={{__html: fmtHtml2}}></div>
    </WithSideBar>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
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
`