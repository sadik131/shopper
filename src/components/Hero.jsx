import React from 'react'
import "../style/hero.css"
import model from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'


export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <p>new arrivals only</p>
                <h1>new</h1>
                <h1>collections</h1>
                <h1>for eeveryone</h1>
                <button>Latest Collection <img className='arrow' src={arrow} alt="" /></button>
            </div>
            <div>
                <img className='banner-img' src={model} alt="" />
            </div>
        </div>
    )
}
