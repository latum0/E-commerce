import React from 'react'
import './Email.css'


export default function email() {
  return (
    <div className="email-container">
        <div className="card-email">
            <h1 className="email-header">
                Get Exlusive Offers On Your Email
            </h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="input">
                <input type="email" className="email-input" placeholder="Your email address"/>
                <button className="btn-email">Subscribe</button>
            </div>
        </div>
    </div>
  )
}
