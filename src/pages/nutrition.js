import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/Products/Products"

const Nutrition = () => (
  <Layout>
    <SEO title="Nutritional Plans" />
    <h1>This is the nutrition example</h1>
    <Products filter="Nutritional"/>
  </Layout>
)

export default Nutrition