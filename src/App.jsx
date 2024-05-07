import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Wrapper from './pages/Wrapper'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './pages/MyOrders/MyOrders'
import UserOrders from './pages/UserOrders/UserOrders'
import AddFood from './pages/Admin/AddFood'

const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || null);
  
  return (
    <>
    <ToastContainer/>
   {showLogin?<LoginPopup setShowLogin={setShowLogin} setUsername={setUsername}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} username={username} loggedInUser={loggedInUser}/>
      <Routes>
      <Route path="/" element={<Wrapper /> }/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder'element={<PlaceOrder loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />}/>
      <Route path='/myorders'element={<MyOrders loggedInUser={setLoggedInUser}/>}/>
      <Route path='/add-food' element={<AddFood />}/>
      <Route path='/userorders' element={<UserOrders loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />

      
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
