import React from 'react'
import './Offer.css'
import Hero from '../assets/hero.jpg'

export default function Offer() {
  return (
    <div className="container">
        <div className="card-offer">
            <div className="left-side">
                <h1 className="head">Exclusive <br /> Offers For You</h1>
                <p className="text-offer">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="btn-collection">Check now</button>
            </div>
            <div className="img-container">
              <img src={Hero} alt="" className="img-offer"/>
            </div>
            
        </div>

    </div>
  )
}
