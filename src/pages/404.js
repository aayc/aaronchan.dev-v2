import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This page doesn't exist</h1>
    <p>That's awkward.  Hopefully the website's not broken.</p>

    <p>In the meantime, 
      <a className = "text-blue-400" rel="noopener noreferrer" target="_blank" href="https://enigmatic-reef-9847.herokuapp.com/">
      &nbsp;please enjoy this tanks videogame I made...
      </a>
    </p>
  </Layout>
)

export default NotFoundPage
