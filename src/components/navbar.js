import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react"
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavigationBar = ({siteTitle, menuLinks, siteSlogan}) => (
    <div style={{margin: `0 auto`,maxWidth: 960,}}>
    <Navbar bg="transparent" expand="lg" variant="dark" color="indigo">
    <Container>
        <Navbar.Brand href="#home">
            <h1 style={{ margin: 0 }}>
                <Link to="/" style={{ color: `white`, textDecoration: `none`,}}>{siteTitle}</Link>
            </h1>
            <h4 style={{color: `white`,textDecoration: `none`,marginBottom: `-1.0rem`,}}>
            {siteSlogan}
            </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop:`10px`}}/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {
                menuLinks.map(link => (
                    <Nav.Item key={link.name}>
                        <Nav.Link style={{color:`white`}} href={link.link}>{link.name}</Nav.Link>
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
