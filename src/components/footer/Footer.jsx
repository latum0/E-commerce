import React from 'react'
import './Footer.css'
import logo from "../assets/logo.jpg";
import insta from '../assets/insta.png';
import whatsup from '../assets/whatsup.png'
import pintrest from '../assets/pintrest.png'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer'>
   <div className="logo-shop">
    <img src={logo} alt="" className="logo" />
    <p>SLOGAN</p>
   </div>
    <ul>
        <li><a href="">Company</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Offices</a></li> 
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
    </ul>
    <div className="icons">

        <Link to="/Man/1"><img src={insta} alt="" className="icon" /></Link>
        <Link to=""><img src={whatsup} alt="" className="icon"/></Link>
        <Link to=""><img src={pintrest} alt="" className="icon"/></Link>
        
        
        
    </div>
    <div className="copyright">
        Copyright @ 2023 - All Right Reserved.
    </div>

    </div>
  )
}
