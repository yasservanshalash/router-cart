import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import img from "../../assets/logo.jpeg";

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={img} />
      </div>
      <div className='navbar__links'>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      </div>
    </div>
  )
}

export default NavBar;