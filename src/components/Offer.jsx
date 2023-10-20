import React from 'react'
import "../style/offer.css"
import LayOut from './pages/LayOut'
import banner from "../Assets/exclusive_image.png"

export default function Offer() {
  return (
    <LayOut>
       <div className="offer-container">
       <div className='offer-text'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>only on best sellers products</p>
            <button>Check Now</button>
        </div>
        <div>
            <img className='banner-img' src={banner} alt="" />
        </div>
       </div>
    </LayOut>
  )
}
