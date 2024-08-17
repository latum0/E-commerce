import React from 'react';
import './Hero.css';
import hero from '../assets/hero.jpg'

function Hero() {
  return (
    <div className='hero'>
      <div className="left-side">
        <div className="left-container">
        <p className="text">NEW ARRIVALS ONLY</p>
        <h1>new <br/> collections <br /> for everyone</h1>
        <button className="btn-collection">Latest Collection -&gt;</button>
        </div>
        

      </div>
      <div className="right-side">
        <img src={hero} alt="" className="img-hero" />
      </div>
    
      

    </div>
  )
}

export default Hero;