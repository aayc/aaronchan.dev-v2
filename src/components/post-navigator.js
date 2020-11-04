import React from "react"
import { StaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function PostNavigator({ className, currentTitle }) {
  return (
    <div className={className}>
      <StaticQuery
        query={graphql`
          query AllMdQuery {
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
        `}
        render={data => {
          let pageIndex = data.markdown.edges.findIndex(
            nodeObj => nodeObj.node.frontmatter.title === currentTitle
          )
          return (
            <div className="flex flex-col justify-center text-center md:flex-row md:justify-between">
              {(() => {
                if (pageIndex + 1 < data.markdown.edges.length) {
                  console.log()
                  return (
                    <a
                      href={
                        data.markdown.edges[pageIndex + 1].node.frontmatter.path
                      }
                      rel="noopener noreferrer"
                      className="transition transform duration-200 text-blue-600 hover:text-blue-400"
                    >
                      <div className="text-black inline-block mr-4">
                        <FontAwesomeIcon
                          className="media-icon transition transform duration-200 hover:text-gray-600 hover:scale-125"
                          style={{ fontSize: "1rem" }}
                          icon={faArrowLeft}
                        />
                      </div>
                      <span>
                        {
                          data.markdown.edges[pageIndex + 1].node.frontmatter
                            .title
                        }
                      </span>
                    </a>
                  )
                } else {
                  return <div></div>
                }
              })()}
              {(() => {
                if (pageIndex > 0) {
                  return (
                    <a
                      href={
                        data.markdown.edges[pageIndex - 1].node.frontmatter.path
                      }
                      rel="noopener noreferrer"
                      className="transition transform duration-200 text-blue-600 hover:text-blue-400"
                    >
                      <span>
                        {
                          data.markdown.edges[pageIndex - 1].node.frontmatter
                            .title
                        }
                      </span>
                      <div className="text-black inline-block ml-4">
                        <FontAwesomeIcon
                          className="media-icon transition transform duration-200 hover:text-gray-600 hover:scale-125"
                          style={{ fontSize: "1rem" }}
                          icon={faArrowRight}
                        />
                      </div>
                    </a>
                  )
                } else {
                  return <div></div>
                }
              })()}
            </div>
          )
        }}
      ></StaticQuery>
    </div>
  )
}
