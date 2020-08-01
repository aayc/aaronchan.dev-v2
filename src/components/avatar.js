import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
function Avatar(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "aaron.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const {url, altText, title} = props;
  const styles = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    boxShadow: "0 0 98px 6px rgba(0, 0, 0, 0.2)"
  }
  return (
    <Img
      style={styles}
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt={altText}
      title={title} />
  )
}
export default Avatar