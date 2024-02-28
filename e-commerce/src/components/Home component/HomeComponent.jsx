
import React from 'react';
// import { Link } from 'react-router-dom';
import Allproducts from '../Products component/Allproducts';
import './HomePageStyle.css';
import { Link } from 'react-router-dom';
import boysimg from './img/img3.jpg'
import electronic from './img/Electronic.jpg'
import access from './img/accessories2.jpg'
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomeComponent() {
  const [products , setProducts] = useState([]);

  useEffect (() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data.slice(0,4)))
      .catch(err => console.log(err))
  },[]) 
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
      <div style={{display:'flex',width:'100vw'}}>
        <div className='Banner-container1' >
          <h2 style={{color:'white',padding:'10px', marginTop:'100px', fontSize:'70px'}}>Trending Collections</h2>
          <p style={{color:'white',padding:'0px 15px', fontWeight:'600'}}>Most Trending and latest fashions for men and girls</p>
          <Link to="products"><button style={{color:'white', margin:'50px 0px 0px 15px', fontWeight:'600', width:'100px', height:'40px', backgroundColor:'red', border:'none'}}>Shop Now </button></Link>
        </div>
        <div>
          <div className='Banner-container2'>
            <div>
            <h1 style={{color:'white', textAlign:'end',padding:'10px'}}>Mens Fashion</h1>
            <button style={{color:'white', margin:'10px 0px 0px 50px', fontWeight:'600', width:'90px', height:'35px', backgroundColor:'red', border:'none'}}>Shop now</button>
            </div>
          </div>
          <div className='Banner-container3'>
            <div>
            <h1 style={{color:'white', textAlign:'end',padding:'10px'}}>Girls Fashions</h1>
            <button style={{color:'white', margin:'10px 0px 0px 50px', fontWeight:'600', width:'90px', height:'35px', backgroundColor:'red', border:'none'}}>Shop now</button>
            </div>
          </div>
        </div>
      </div>

        <h1 style={{ fontSize:'30px', marginTop:'30px', textAlign:'center' }} >Products</h1>
        <p style={{textAlign:'center'}}>Check out all new arrival from the latest brand's exotic collections at a great price</p>
        <div style={{display:'flex', width:'100vw', flexWrap:'wrap',justifyContent:'center',marginTop:'40px'}}>
        {products.map(products =>(
          <div key={products._id} >
            <div  style={{width:'300px',height:'93%', marginLeft:'10px',border:'1px #DCDCDC solid',marginTop:'20px', borderRadius:'5px', paddingTop:'20px'}}>
              <div style={{justifyContent:'center', width:'100%', display:'flex'}}>
              <img  style={{width:'70%', height:'250px'}} src={products.image} alt="" />
              </div>
              <p style={{textAlign:'center',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px',fontSize:'20px',fontWeight:'600'}}>{products.title.slice(0,11)}</p>
              <p style={{textAlign:'center',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}>{products.title.slice(0,20)}....</p>
              <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <Link to={`/unique product/${products.id }`} > <button style={{ borderRadius:'5px',border:'1px gray solid', cursor:'pointer',backgroundColor:'gray',color:'white', padding:'10px'}}>View Details</button> </Link>
              </div>
             
            </div>
          </div>
          
          // <div  key={products._id} style={{display:'flex', flex:'wrap'}}>
          //   <div className='Category' style={{width:'100%',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          //     <p>{products.id}</p>
          // </div>
          // </div>
        ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-between', width:'100%', height:'400px',marginTop:'20px'}}>
          <div style={{width:'50%', height:'100%'}}>
            <img style={{width:'100%',height:'100% '}} src={boysimg} alt="" />
          </div>
          <div style={{width:'50%'}}>
            <h1 style={{textAlign:'center', marginTop:'15%'}}>Boys trends and fashions </h1>
            <p style={{textAlign:'center', marginTop:'5%', width:'600px', marginLeft:'70px'}}>Introducing our latest collection of boys' fashion, designed to elevate their style game with confidence and flair. From trendy graphic tees that speak volumes to sleek button-down shirts perfect for any occasion, we've curated pieces that blend comfort with contemporary aesthetics. Dive into a world of versatile denim, from classic jeans to stylish jackets, ensuring your little one stays on-trend effortlessly.</p>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between', width:'100%', height:'400px'}}>
          <div style={{width:'50%'}}>
            <h1 style={{textAlign:'center', marginTop:'15%'}}>Boys trends and fashions </h1>
            <p style={{textAlign:'center', marginTop:'5%', width:'600px', marginLeft:'70px'}}> Explore Our Latest Electronic Marvels!" Dive into a realm of cutting-edge technology with our newest electronic arrivals. From state-of-the-art smartphones boasting seamless performance to sleek smartwatches that redefine connectivity, we've curated a selection that promises to elevate your digital lifestyle. Discover the ultimate in entertainment with our range of high-definition TVs and immersive audio systems, ensuring every moment is a cinematic experience. Stay ahead of the curve with our innovative gadgets and accessories designed to simplify your daily routines while keeping you at the forefront of modernity.</p>
          </div>
          <div style={{width:'50%', height:'100%'}}>
            <img style={{width:'100%',height:'100% '}} src={electronic} alt="" />
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between', width:'100%', height:'400px'}}>
          <div style={{width:'50%', height:'100%'}}>
            <img style={{width:'100%',height:'100% '}} src={access} alt="" />
          </div>
          <div style={{width:'50%'}}>
            <h1 style={{textAlign:'center', marginTop:'15%'}}>Accessorize Your Way to Style Bliss</h1>
            <p style={{textAlign:'center', marginTop:'5%', width:'600px', marginLeft:'70px'}}> Introducing Our Latest Fashion Gems!" Elevate your look and express your individuality with our captivating new collection of fashion accessories. From statement-making jewelry pieces that add a touch of glamour to your ensemble, to chic scarves and hats that effortlessly elevate any outfit, we've curated a selection that speaks to every taste and occasion. Discover the perfect finishing touches with our range of stylish handbags and wallets, designed to marry functionality with fashion-forward flair. Whether you're seeking to make a bold statement or simply refine your everyday elegance, our latest accessories promise to inspire confidence and captivate attention.</p>
          </div>
        </div>
        
    </div>
  )
}

export default HomeComponent