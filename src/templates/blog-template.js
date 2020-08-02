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
  const fmtHtml = html.replace(/<a href/g, "<a target='blank' rel='noopener noreferrer' class='text-blue-600' href")
  const fmtHtml2 = fmtHtml.replace(/<ul/g, "<ul className='list-disc'")
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