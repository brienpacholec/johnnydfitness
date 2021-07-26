import React from "react"
import Button from 'react-bootstrap/Button'

const BSButton = ({ variant, url, text, ...props }) => {
  return (
    <>
        <Button variant={variant}>{text}</Button>{' '}
    </>
  )
}
export default BSButton
