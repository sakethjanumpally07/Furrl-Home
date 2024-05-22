// src/components/Navbar.js
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>#Vibe Page</h1>
      <Link to="/wishlist">
        <button>Wishlist</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  )
}

export default Navbar
