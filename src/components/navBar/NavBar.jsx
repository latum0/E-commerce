import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import cart from "../assets/cart.png";
import './navBard.css'; 
import {Link} from 'react-router-dom';


export const NavBar = () => {
    const [menu,setMenu] = useState('Shop');

  return (
    <div className="nav " >
        <div className="navLogo">
            <a href=""><img src={logo} alt="" className='logo'/>
            </a>
           <a><p className="name">SLOGAN</p></a> 
            
        </div>
        <div className="nav-list">
            <ul className="nav-list">
                <li><a href="#" onClick={()=>setMenu('Shop')}>Shop</a> {menu==='Shop' ? <hr/> : <></>} </li>
                <li><a href="#" onClick={()=>setMenu('Men')}>Men</a> {menu==='Men' ? <hr/> : <></>} </li>
                <li><a href="#" onClick={()=>setMenu('Women')}>Women</a> {menu==='Women' ? <hr/> : <></>}  </li>
                <li><a href="#" onClick={()=>setMenu('Kids')} >Kids</a> {menu==='Kids' ? <hr/> : <></>}  </li>
            </ul>
        </div>
        <div className="log-cart">
            <button className='btn-log'>
                Login
            </button>
            <div> 
                <div className='numProd'>
                    0
                </div>
                <a href=""><img src={cart} alt="" className='cart-logo' /></a>
                
            </div>
            
        </div>

    </div>
  )
}
