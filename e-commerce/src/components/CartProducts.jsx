import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../Hook component/UserContext';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CartProducts({cartItem, setCartItem, size}) {

    // const [cart, setCart] = useState([]);
    
    const value = useContext(UserContext)
    const [cartData, setCartData] = value;

    const {id} = useParams();
    

    // useEffect (()=>{
    //     axios.get('https://fakestoreapi.com/products')
    //     .then(res => setCart(res.data))
    //     .catch(err => console.log(err))
    //     console.log(cart)
    // },[])

    const CartValue =()=>{
        console.log(cartItem)
    }

    const [productPrice, setProductPrice] = useState('')
    const [butID, setButID] = useState()

    // const  increaseQuantity =(index, quantityvalue)=>{
    //   setCartItem(prevData =>{
    //     const newData = [...prevData];
    //     newData[index].quantity = quantityvalue;
    //     return newData
    //   })
      // // let qty = {cart_id}
      //   setCartItem( cartItem =>
      //       cartItem.map((item)=>(
      //         // item.Product.map(items =>
      //           cart_id === item.id ? {...item , quantity : item.quantity+1} : item
      //       // )
      //       )
      //       )
      //       );
        // if (cart_id ==)
    //     console.log(cartItem)
    //     console.log(quantityvalue)
    //     console.log(index)
        
    // }

    //  function to increasequantity value
   
    const  increaseQuantity =(index, quantityvalue)=>{
      setCartItem(prevData =>{
        const newData = [...prevData];
        newData[index].quantity = quantityvalue;
        return newData
      })
      console.log(cartItem)
        console.log(quantityvalue)
        console.log(index)
    }

  //  function to decreasequantity value
    const decreaseQuantity =(index, quantityvalue, value) =>{
      if (value>1){
        setCartItem(prevData =>{
          const newData = [...prevData];
          newData[index].quantity = quantityvalue;
          return newData
        })
      }
    }

    // Function to calculate Total price

    const [totalprice , setTotalPrice] = useState()
    const CalculateTotalvalue = () =>{
      let total = 0;
      cartItem.forEach(item=> {
        item.Product.forEach( product =>{
          total += product.price*item.quantity;
        })
      });
      return total;
    }
   
    useEffect (()=>{
      setTotalPrice(CalculateTotalvalue())
    },[cartItem])

  return (
    <>
    <h1 style={{textAlign:'center'}}>Total Products in the cart : {size}</h1>
    <div style={{ width:'100%',display:'flex'}}>
      <div style={{width:'70%', height:'500px'}}>
      <div style={{ width:'96%' ,margin:'30px 0px 10px 10px ', height:'50px',display:'flex', justifyContent:'space-around'}}>
        <div style={{width:'60%' }}><h2>Product</h2></div>
        <h2>Quantity</h2>
        <h2>Price</h2>
      </div>

      <div style={{overflow:'scroll', height:'58vh'}}>
      {cartItem.map((item, index) =>(
        <div key={index}>
           {item.Product.map(product =>(
          <div style={{display:'flex',justifyContent:'space-between',border:'1px gray solid', borderRadius:'5px',marginTop:'10px',padding:'10px',width:'95%'}} key={product.id}>
            <div  style={{display:'flex',width:'70%'}}>
            <img style={{width:'100px',height:'100px'}} src={product.image} alt="" />
            <h4 style={{marginTop:'20px',marginLeft:'20px'}}>{product.title.slice(0,11)} <br /> {product.title.slice(11,40)} ...</h4>
            </div>
            <div style={{display:'flex',marginTop:'20px',width:'20%',marginLeft:'-18px'}}>
            <button onClick={()=> increaseQuantity(index, item.quantity+1)} style={{width:'40px',height:'25px',borderRadius:'5px',border:'1px green solid'}}>+</button>
            <p style={{marginLeft:'10px', marginRight:'10px',marginTop:'4px'}}>{item.quantity}</p>
            <button onClick={()=>decreaseQuantity(index, item.quantity-1,item.quantity)} style={{width:'40px',height:'25px',borderRadius:'5px',border:'1px red solid'}}>-</button>
            </div>
            <div style={{}}>
            <p style={{fontSize:'30px',marginTop:'20px'}}>${String(product.price*item.quantity).slice(0,6)}</p>
            </div>
            
            
          </div>
        ))} 
         <div>

        </div>
        </div>
      ))}
      
      </div>
      <div style={{display:'flex', justifyContent:'right', margin:'3% 7% 0% 0%'}}>
        <p style={{textAlign:'right', color:'black', fontSize:'30px'}}>Total Price : <span style={{marginLeft:'60px'}}> {Math.round(totalprice)}</span></p>
      </div> 
      </div>


      <div style={{border:'1px gray solid', margin:'30px 30px 50px 30px',width:'25%', borderRadius:'10px'}} >
      <div>
      <h1 style={{textAlign:'center', marginTop:'20px'}}>Cart Summary</h1>
      <table>
        <tbody>
          <tr>
            <td style={{padding:'20px'}}>Total no.of products : </td>
            <td style={{padding:'20px'}}>{size}</td>
          </tr>
          <tr>
            <td style={{padding:'20px'}}>Total quantity of product : </td>
            <td style={{padding:'20px'}}> {cartItem.reduce((acc,item)=>(acc + item.quantity),0)}</td>
          </tr>
          <tr>
            <td style={{padding:'20px'}}>Total Price : </td>
            <td style={{padding:'20px'}}>{String(totalprice).slice(0,7)}</td>
          </tr>
          <tr>
            <td style={{padding:'20px'}}>Total Price :</td>
            <td style={{padding:'20px'}}>{Math.round(totalprice)}</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
     
    </div>
    
    

    
    
    </>
   
  )
}

export default CartProducts