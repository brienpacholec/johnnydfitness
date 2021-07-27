import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const buttonStyles = {
    borderRadius: '50px'
    
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCardGroup = ({ products }) => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault()
        setLoading(true)

        const price = new FormData(event.target).get("priceSelect")
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price, quantity: 1 }],
            successUrl: `${window.location.origin}/page-2/`,
            cancelUrl: `${window.location.origin}/`,
        })

        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
    }
    const individual_cards = Object.entries(products).map(([key,product]) => (
        <Card key={product.id} style={{marginBottom: `20px`, maxWidth: `350px`}}>
            <form onSubmit={handleSubmit}>
            <Card.Img variant="top" src={product.images} alt={product.name} height={200} width={200}/> 
            <Card.Body style={{textAlign: `left`}}>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                    <br/>
                    <Form.Select aria-label="Default select example" name="priceSelect">
                        {product.prices.map(price => (
                            <option key={price.id} value={price.id}>
                                {formatPrice(price.unit_amount, price.currency)}
                            </option>
                        ))}
                    </Form.Select>
                    <hr/>
                    {/* <button disabled={loading} style={loading? { ...buttonStyles, ...buttonDisabledStyles }: buttonStyles}> Purchase</button> */}
                    <Button as="input" type="submit"  value="Purchase" disabled={loading} style={loading? { ...buttonStyles, ...buttonDisabledStyles }: buttonStyles}/>{' '}
                </Card.Text>
            </Card.Body>
            </form>
        </Card>
    ))
    return(
        <>
            <div class="products_containter">
            {individual_cards}
            </div>
        </>
    )
  
}

export default ProductCardGroup

