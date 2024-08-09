import React from 'react'
import NavBar from './components/nav_bar/nav_bar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'



const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        < Route path='/' element= {<Home/>} />
        < Route path='/cart' element= {<Cart/>} />
        < Route path='/order' element= {<PlaceOrder/>} />  
     
      </Routes>
    </div>
  )
}

export default App
