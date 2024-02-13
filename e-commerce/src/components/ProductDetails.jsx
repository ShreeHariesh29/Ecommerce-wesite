import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


function ProductDetails() {
  const [products , setProducts] = useState([]);
  const [categories , setCategories] = useState([]);
  const [categoryItem, setCategoryItem] =useState([])

  useEffect (()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => setCategories(res.data))

    console.log(products)

  },[])
  const allProducts =()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
  }
  
  const getCategoryWiseData = (catItem) => {
     axios.get(`https://fakestoreapi.com/products/category/${catItem}`)
      .then(res =>setCategoryItem(res.data))
      .catch(err => console.log(err))
      setProducts(categoryItem)
      console.log(categoryItem)
  }

  const Filterchange  = (catItem)=>{
       getCategoryWiseData(catItem)
      console.log(catItem)
  }
  const particulardata =(productid)=>{
    console.log(productid)
  }
 
  return (
    <div>
      
        
    </div>
    
  )
}

export default ProductDetails