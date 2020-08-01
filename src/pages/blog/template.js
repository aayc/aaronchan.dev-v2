import React from "react"
import WithSideBar from "../../components/with-sidebar"

export default function Template({ data }) {
  const { markdown } = data
  const { frontmatter, html } = markdown
  const fmtHtml2 = html.replace(/<ul/g, "<ul className='list-disc'").replace(/<h3/g, "<br /><h3")
  return (
    <WithSideBar showMore={true}>
      <h1>{frontmatter.title}</h1>
      <h5>{frontmatter.date_string}</h5>
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