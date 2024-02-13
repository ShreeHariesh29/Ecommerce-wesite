
import React, { useEffect, useState } from 'react';
import Banner1 from '../img/Home page banner 1.jpg';
// import { Link } from 'react-router-dom';
import Allproducts from './Allproducts';



function HomeComponent() {
  // const [products , setProducts] = useState([]);
  // const [categories , setCategories] = useState([]);
  // const [categoryItem, setCategoryItem] =useState([])

  // useEffect (()=>{
  //   axios.get('https://fakestoreapi.com/products')
  //   .then(res => setProducts(res.data))
  //   .catch(err => console.log(err))

  //   axios.get('https://fakestoreapi.com/products/categories')
  //   .then(res => setCategories(res.data))

  //   console.log(products)

  // },[])
  // const allProducts =()=>{
  //   axios.get('https://fakestoreapi.com/products')
  //   .then(res => setProducts(res.data))
  //   .catch(err => console.log(err))
  // }
  
  // const getCategoryWiseData = (catItem) => {
  //    axios.get(`https://fakestoreapi.com/products/category/${catItem}`)
  //     .then(res =>setCategoryItem(res.data))
  //     .catch(err => console.log(err))
  //     setProducts(categoryItem)
  //     console.log(categoryItem)
  // }

  // const Filterchange  = (catItem)=>{
  //      getCategoryWiseData(catItem)
  //     console.log(catItem)
  // }
  // const particulardata =(productid)=>{
  //   console.log(productid)
  // }

  // const Filterchange = (catItem)=>{
  //   const result = products.filter((currentData)=>{
  //     return currentData.category === catItem;
      
  //   })
  //   setProducts(result)
  //   console.log(catItem)
  // }
  return (
    <div>
        <img style={{width:'100%', height:'400px'}} src={Banner1} alt="" />

        {/* Catogery postion */}
        <h3 style={{ fontSize:'30px', marginTop:'30px', fontFamily: 'League Spartan', textAlign:'center' }} >Categories</h3>
        <Allproducts />
        
    </div>
  )
}

export default HomeComponent