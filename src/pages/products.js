import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/Products/Products"

const FullCart = () => (
  <Layout>
    <SEO title="All Products" />
    <h1>All my products</h1>
    <Products filter=""/>
  </Layout>
)

export default FullCart