
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AddtoCart from './pages/AddtoCart';
import Products from './pages/Products';
import ParticularProduct from './pages/ParticularProduct';
import Aboutus from './pages/Aboutus';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import UserContext from './Hook component/UserContext';
import CartProducts from './components/Cart component/CartProducts';

function App({products}) {

const [cartData, setCartData] = useState([])
const [cartItem, setCartItem] = useState([])


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar size={cartItem.length} />
      <UserContext.Provider value={[cartData, setCartData]}>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/addtocart" element={<AddtoCart products={products} />} /> */}
        <Route path="/unique product/:id" element={<ParticularProduct cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path="/addtocart" element={<CartProducts cartItem={cartItem} setCartItem={setCartItem} size={cartItem.length} />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>
      </UserContext.Provider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
