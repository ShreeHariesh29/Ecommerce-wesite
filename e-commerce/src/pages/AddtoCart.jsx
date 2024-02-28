import React from 'react'
import CartProducts from '../components/Cart component/CartProducts'

function AddtoCart({cartItem, setCartItem, size}) {
  return (
    <div><CartProducts size={size} /></div>
  )
}

export default AddtoCart