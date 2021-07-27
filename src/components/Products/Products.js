import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCardGroup from "./ProductCardGroup"



const Products = ({filter,}) => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices($order: [SortOrderEnum] = ASC) {
  prices: allStripePrice(
    filter: {active: {eq: true}, product: {active: {eq: true}}}
    sort: {fields: [unit_amount], order: $order}
  ) {
    edges {
      node {
        id
        active
        currency
        unit_amount
        product {
          id
          name
          images
          description
        }
      }
    }
  }
}
      `}
      render={({ prices }) => {
        // Group prices by product
        const nameFilter = {filter}['filter']
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          const name = product.name
          
          if(name.includes(nameFilter)){
            if (!products[product.id]) {
              products[product.id] = product
              products[product.id].prices = []
            }
            products[product.id].prices.push(price)
          } 
     
        }
        return (
          <ProductCardGroup products={products} />
        )
      }}
    />
  )
}

export default Products