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
              <br />
              <a href="https://github.com/aayc" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="mr-6 media-icon" icon={faGithub} />
              </a>
              <a href="https://twitter.com/aaronychan" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="mr-6 media-icon" icon={faTwitter} />
               </a>
              <a href="https://linkedin.com/in/aaron-y-chan" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="media-icon" icon={faLinkedin} />
               </a>
               <div className="mt-4">
              {showMore ? 
                <Link to="/archive" className="text-md mt-4 floating-outline cursor-pointer">more posts</Link> 
                : <></>}
              </div>
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