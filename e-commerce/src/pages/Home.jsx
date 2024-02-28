import React from 'react'
import HomeComponent from '../components/Home component/HomeComponent'
function Home( {products, handleClick} ) {


  return (
    <div>
      <HomeComponent products={products}  handleClick={handleClick} /> 
    </div>
  )
}

export default Home