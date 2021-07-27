import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavigationBar = ({siteTitle, menuLinks, siteSlogan}) => (
    <div style={{margin: `0 auto`,maxWidth: 960,}}>
    <Navbar bg="transparent" expand="lg" variant="dark" color="indigo">
    <Container>
        <Navbar.Brand >
            <AniLink to="/" paintDrip duration={1} hex="#000" style={{color: `white`, textDecoration: `none`,}}>
                <h1 id="siteTitle" style={{ margin: 0 }}>{siteTitle}</h1>
                <h4 id="siteSlogan" style={{marginBottom: `-1.0rem`,}}>{siteSlogan}</h4>
            </AniLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop:`10px`}}/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {
                menuLinks.map(link => (
                    <Nav.Item key={link.name}>
                        {/* <Nav.Link style={{color:`white`}} href={link.link}>{link.name}</Nav.Link> */}
                        <Nav.Link><AniLink to={link.link} cover direction="down" duration={1} bg="#000" style={{color: `white`, textDecoration: `none`,}}>{link.name}</AniLink></Nav.Link>
                    </Nav.Item>
                ))
            }
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
)
export default NavigationBar
