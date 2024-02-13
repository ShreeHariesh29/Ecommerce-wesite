import React from 'react'
import CartProducts from '../components/CartProducts'

function AddtoCart({cartItem, setCartItem, size}) {
  return (
    <div><CartProducts size={size} /></div>
  )
}

export default AddtoCart