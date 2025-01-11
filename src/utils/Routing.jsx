import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import FoodCards from '../components/FoodCards'
import ContactUs from '../components/OrderHistory'
import Cart from '../components/Cart'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<FoodCards/>}/>
        <Route path='/Order-History' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/developer-Profile' element={<Cart/>}/> */}
      </Routes>
    </div>
  )
}

export default Routing