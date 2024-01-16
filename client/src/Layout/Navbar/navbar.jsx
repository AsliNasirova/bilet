import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
    <div className='navbar'>
        <div className="image_nav_left"><img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="" /></div>
      <ul className='switch_nav'>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li>About</li>
        <li>Courses</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
        <li><NavLink to={"/add"}>Add</NavLink></li>
        <li><NavLink to={"/wishlist"}><FaHeart /></NavLink></li>
        <li><NavLink to={"/basket"}><FaBasketShopping /></NavLink></li>
        <li><NavLink to={"/search"}><FaSearch /></NavLink></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
