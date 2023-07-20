/* eslint-disable no-unused-vars */
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Dogs from './Components/Dogs/Dogs';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
import { CartContext } from './Components/Context/CartContext';

import axios from 'axios';

function App() {
  const [allDogs,setAllDogs]=useState([])
  const [cart,SetAddCart]=useState([{}])
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    async function getdata(){
      const res = await axios.get("/v1/dogs")
      return res;
    }
    getdata().then((res)=> setAllDogs(res.data));
    getdata().catch((err)=> console.log(err));
  },[allDogs.id])
  return (
   <CartContext.Provider value={{cart,SetAddCart,total,setTotal}}>
      <Router >
        <Navbar />
        <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dogs" element={<Dogs allDogs={allDogs}/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </div>
      </Router>
   </CartContext.Provider>
  );
}

export default App;
