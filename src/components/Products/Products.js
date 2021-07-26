import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}

const Products = ({filter,}) => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: {active: {eq: true}, product: {active: {eq: true}}}
            sort: {fields: [unit_amount]}
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
          <div style={containerStyles}>
            {Object.keys(products).map(key => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))}
          </div>
        )
      }}
    />
  )
}

export default Products