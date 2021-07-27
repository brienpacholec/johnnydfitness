import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Products from "../components/Products/Products"

const Fitness = () => (
  <Layout>
    <Seo title="Fitness Plans" />
    <h1>This is the Fitness example</h1>
    <p>Nulla fringilla diam in dictum rutrum. Ut nec enim ut est ullamcorper consequat id vel ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed elit sapien, vestibulum vitae rhoncus ut, convallis id tellus. Maecenas dictum fermentum ligula, ut ornare mi. Quisque convallis eros sem</p>
    <Products filter="Fitness"/>
  </Layout>
)

export default Fitness