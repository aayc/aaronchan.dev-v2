import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Avatar from "./avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function WithSideBar({ children, showMore }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sm:flex">
        <div className="sm:float-left sm:mr-16">
          <div className="rounded-full" style={{ marginBottom: `1rem` }}>
            <center>
              <Avatar />
              <br />
              <a href="https://github.com/aayc" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="mr-2" icon={faGithub} /></a>
              <a href="https://twitter.com/aaronychan" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="mr-2" icon={faTwitter} /></a>
              <a href="https://linkedin.com/in/aaron-y-chan" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <br />
              {showMore ? 
                <Link to="/archive" className="text-sm floating-outline cursor-pointer">more posts</Link> 
                : <></>}
            </center>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </Layout>
  )
}