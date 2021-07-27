import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react"
import PropTypes from "prop-types"
import NavigationBar from "../components/navbar"

const Header = ({siteTitle, menuLinks, siteSlogan}) => (
  <header>
    <div style={{background: `black`,marginBottom: `0.05rem`, paddingBottom: `1.45rem`,}}>
        <NavigationBar siteTitle={siteTitle} siteSlogan={siteSlogan} menuLinks={menuLinks}/>
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
