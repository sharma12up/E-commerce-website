import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Shopcart from './Shopcart'
import Cardpage from './Cardpage'
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Shopcart></Shopcart>}></Route>
        <Route path="/cards/:cardID" element={<Cardpage></Cardpage>}></Route>
       </Routes>
    </div>
  )
}

export default App