import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="m-0 m-auto max-w-2xl"
      style={{ padding: `1.45rem 1.0875rem`, }}
    >
      <div className="float-right">
        <h4 className="inline mr-4 floating-outline cursor-pointer">
          About
        </h4>
        <h4 className="inline floating-outline cursor-pointer">
          Contact
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
