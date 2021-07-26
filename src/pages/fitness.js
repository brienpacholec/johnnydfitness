import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Products from "../components/Products/Products"

const Fitness = () => (
  <Layout>
    <Seo title="Fitness Plans" />
    <h1>This is the Fitness example</h1>
    <Products filter="Fitness"/>
  </Layout>
)

export default Fitness