import React, { useEffect, useState } from 'react'
import './Pop.css'
import W1 from '../assets/W1.jpg'
import w2 from '../assets/W2.jfif'
export default function Pop(props) {
    

    


  return (
    
    <div className="pop">
         <div className="text-pop">
            {props.collecName}
        </div>
        <div className="line"></div>
    
       
        <div className="cards">

            

        <div className="card-pop">
                <img src={W1} alt=""   className='img'/>
                <div className="desc">
                    <p>lorem ipsum</p>
                    <p>50$</p>
                </div>
                
            </div>
            <div className="card-pop">
                <img src={w2} alt=""   className='img'/>
                <div className="desc">
                    <p>lorem ipsum</p>
                    <p>50$</p>
                </div>
                
            </div>
            <div className="card-pop">
                <img src={W1} alt=""   className='img'/>
                <div className="desc">
                    <p>lorem ipsum</p>
                    <p>50$</p>
                </div>
                
            </div>
            <div className="card-pop">
                <img src={W1} alt=""   className='img'/>
                <div className="desc">
                    <p>lorem ipsum</p>
                    <p>50$</p>
                </div>
                
            </div>
        </div>
   
    </div>
  )
}
