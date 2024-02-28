import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Hook component/UserContext';


function Allproducts({handleClick}) {
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

    // const [cartData, setCartData] = useState([])

    // const CartData = (product)=>{
    //   console.log(product)
    //   cartData.push(product)
    //   localStorage.setItem('cart', cartData )
    // }
    // useEffect (()=>{
    //   localStorage.setItem("cart",JSON.stringify(cartData))
    // },[cartData])
  
    const Filterchange  = (catItem)=>{
         getCategoryWiseData(catItem)
        console.log(catItem)
    }
    const particulardata =(productid)=>{
      console.log(productid)
    }

    const value = useContext(UserContext)
    const [cartData, setCartData] = value;

    const CartData =(e,quantity)=>{
      console.log(e)
      axios.get(`https://fakestoreapi.com/products/${e}`)
        .then(res =>setCartData(cartData => cartData.concat(res.data)))
        .catch(err => console.log(err))
        console.log(cartData)
    }
    
    // const cartData = ()=>{
    //   localStorage.setItem("input",JSON.stringify(products))
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
        <div className='Category' style={{width:'100%',display:'flex',justifyContent:'center',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          <button onClick={()=>allProducts()} style={{width:'200px',backgroundColor:'white', borderRadius:'5px',height:'50px',marginLeft:'20px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 ',textAlign:'center',fontFamily:'sans-serif',cursor:'pointer'}} >all</button>
          {categories.map(categories =>(
            <div key={categories._id} style={{display:'block'}}>
            <button onClick={()=>Filterchange(categories)} style={{width:'200px',backgroundColor:'white', borderRadius:'5px',height:'50px',marginLeft:'20px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 ',textAlign:'center',fontFamily:'sans-serif',cursor:'pointer'}}>{categories}</button>
            </div>
            
          ))}
          
        </div>
        {/* End of Category portion */}

        {/* Product portion */}
        <h1 style={{ fontSize:'30px', marginTop:'30px', textAlign:'center' }} >Products</h1>
        <p style={{textAlign:'center'}}>Check out all new arrival from the latest brand's exotic collections at a great price</p>
        <div style={{display:'flex', width:'90vw', flexWrap:'wrap',justifyContent:'center',marginTop:'40px',marginLeft:'5%'}}>
        {products.map(products =>(
          <div key={products._id} >
            <div style={{width:'200px',height:'88%', marginLeft:'10px',border:'1px #DCDCDC solid',marginTop:'20px', borderRadius:'5px', paddingTop:'20px'}}>
              <div style={{justifyContent:'center', width:'100%', display:'flex'}}>
              <img style={{width:'70%', height:'170px'}} src={products.image} alt="" />
              </div>
              <p style={{textAlign:'center',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px',fontSize:'20px',fontWeight:'600'}}>{products.title.slice(0,11)}</p>
              <p style={{textAlign:'center',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}>{products.title.slice(0,20)}....</p>
              <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <Link to={`/unique product/${products.id }`} > <button onClick={()=>particulardata(products.id)} style={{ borderRadius:'5px',border:'1px gray solid', cursor:'pointer',backgroundColor:'gray',color:'white', padding:'10px'}}>View Details</button> </Link>
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

    </div>
  )
}

export default Allproducts