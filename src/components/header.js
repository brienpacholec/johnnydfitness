import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle, menuLinks, siteSlogan }) => (
  <header>
    <div style={{background: `black`,marginBottom: `1.45rem`, paddingBottom: `1.45rem`,}}>
      <div style={{margin: `0 auto`,maxWidth: 960,padding: `1.45rem 1.0875rem`,}}>
        {/* Title */}
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ color: `white`, textDecoration: `none`,}}>{siteTitle}</Link>
        </h1>
        {/* SLOGAN */}
        <h4 style={{color: `white`,textDecoration: `none`,marginBottom: `-1.0rem`,}}>
          {siteSlogan}
        </h4>
      </div>
     
    </div>
     <Nav activeKey="/" className="" style={{margin: `0 auto`,maxWidth: 960,padding: ``, marginTop: `-1%`,placeContent:`center`}}>
      {
        menuLinks.map(link => (
        <Nav.Item key={link.name}>
          <Nav.Link style={{ color: `black`,}} href={link.link}><h2><u>{link.name}</u></h2></Nav.Link>
        </Nav.Item>
        ))
      }
      </Nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
