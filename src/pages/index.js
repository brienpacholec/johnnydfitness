import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Checkout from "../components/checkout"
import Embed from "../components/embed"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Container fluid="md">

      {/* P1 */}
      <Row>
        <Col>
          <h1>Welcome to Johnny D. Fitness!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis nisl lorem, ac dictum nulla dignissim nec. Suspendisse feugiat magna quis dolor egestas commodo. Nullam vulputate ullamcorper augue, eget eleifend dui pharetra vel. </p>
          <ul>
            <li> Donec ornare vulputate porta. Nam ut metus euismod, cursus sem et, ultrices elit.</li>
            <li>Aliquam urna nisi, auctor sed dolor sit amet, blandit pretium ex. Morbi ac dui placerat, molestie nisi in, placerat eros. Curabitur posuere neque eu diam molestie egestas vitae at mauris. Etiam interdum odio at erat bibendum sollicitudin.</li>
          </ul>
        </Col>
      </Row>

      {/* LINK to products */}
      <Row className="text-center">
        <Col>
          <AniLink to="/products/" paintDrip duration={5} hex="#000" ><Alert variant="primary">View all my products!</Alert></AniLink>
        </Col>
      </Row>
      
      {/* VIDEO embed */}
      <Row className="text-center">
        <Col>
          <Embed
            videoSrcURL="https://www.youtube.com/embed/sxseil4boEM"
            videoTitle="Johnny D."
          />
        </Col>
      </Row>
      
      {/* P2 */}
      <Row>
        <Col>
          <p>Nulla fringilla diam in dictum rutrum. Ut nec enim ut est ullamcorper consequat id vel ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed elit sapien, vestibulum vitae rhoncus ut, convallis id tellus. Maecenas dictum fermentum ligula, ut ornare mi. Quisque convallis eros sem</p>
          <p>Sed aliquet tincidunt libero, scelerisque tincidunt turpis dapibus eu. Pellentesque semper, lorem sed fringilla porta, mi augue suscipit lectus, sed consequat nibh nisi fermentum odio. Aenean malesuada, lacus eget hendrerit auctor, enim quam porttitor lacus, et efficitur quam tortor non erat. Duis id pellentesque ligula. Pellentesque cursus libero vitae tellus tincidunt vehicula. In at nisl et enim venenatis pretium non ut urna. Sed pharetra pretium nunc, vitae fringilla dui finibus vitae. Sed euismod diam leo, at facilisis purus rhoncus fermentum. Pellentesque suscipit dolor in congue tincidunt. Quisque massa risus, dapibus in ante a, semper venenatis erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Col>
      </Row>

      {/* IMAGES */}
      <Row>
        <Col>
          <StaticImage
            src="../images/johnny_4.jpg"
            alt="Johnny D. Headshot"
            objectFit="contain"
            formats={["AUTO", "WEBP", "AVIF"]}
            style={{ 
              marginBottom: `1.45rem`,
              maxHeight:'300px',
            }}
          />
        </Col>
      </Row>

      {/* BASIC checkout */}
      <Row className="text-center">
        <Col>
          <Checkout />
        </Col>
      </Row>

    </Container>
    
  </Layout>
)

export default IndexPage
