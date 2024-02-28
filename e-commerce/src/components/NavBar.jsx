import React from 'react'
import { Link } from 'react-router-dom'
import  Logo  from '../img/Online_mart-removebg-preview.png'


import addtocart from '../img/6445100.png'



function NavBar({size}) {
  return (
    <div style={{display:'flex', justifyContent:'space-between',width:'100%', height:'80px'}}>
      <div >
      <Link to='/' style={{marginLeft:'5%'}} ><img style={{width:'100px', height:'100px'}} src={Logo} alt="Logo" /></Link>
      </div>
      <div style={{ width:'100%',marginTop:'5px'}}>
      <nav style={{ width:'100%', marginTop:'20px' }}>
            <ul style={{ display:'flex', justifyContent:'center'}}>
                <Link to="/"  style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Home </Link>
                <Link to="/products" style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Products </Link>
                <Link to="/addtocart" style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Add to Cart </Link>
                <Link to="/aboutus" style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> About Us </Link>
            </ul>
      </nav>
      </div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', width:'150px'}}>
        <Link to="addtocart"><img style={{width:'40px',height:'40px'}} src={addtocart} alt="" /> </Link>
        <button style={{textDecoration:'none',color:'white',marginTop:'-38px',fontWeight:'700',height:'20px', width:'20px', borderRadius:'50%',border:'none',backgroundColor:'red'}}>{size}</button>
      </div>
        
    </div>
  )
}

export default NavBar