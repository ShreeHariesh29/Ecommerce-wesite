import React from 'react'
import HomeComponent from '../components/HomeComponent'
function Home( {products, handleClick} ) {


  return (
    <div>
      <HomeComponent products={products}  handleClick={handleClick} /> 
    </div>
  )
}

export default Home