import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin,username}) => {


  const {getCartCount} = useContext(StoreContext);
  console.log('from the navbar username prop is',username);


  return (
    <div className='navbar'>
         <Link to="/"><img className='logo' src={assets.logo} alt="Logo" /></Link>
         <ul  className={'navbar-menu'}>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/userorders">My Orders</Link></li>
            <li><Link>Contact Us</Link></li>
            {username == 'admin1' ? <li><Link to="/add-food">Add Food</Link></li> : null}
         </ul>
         <div className='navbar-right'>
         <div className="navbar-animation">
          <img className='navbar-icon' src={assets.Bike} alt="" />
        </div>
         <img style={{ width: '30px', height: 'auto' }} src={assets.searchIcon} alt="" />
         <div className='navbar-search-icon'>
            <Link to="/cart"><img src={assets.cart}/></Link>
            <div className={getCartCount()>=0?"dot":""}>{getCartCount()}</div>
         </div>

         {
          username ? <span style={{color:"#ffffff",fontSize:"medium"}}>Hi {username}!</span> :
            <button className='button' onClick={() => setShowLogin(true)} disabled={username}>
              Sign In
            </button>
        }
         </div>

         
    </div>
  )
}

export default Navbar
