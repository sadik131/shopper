import React from 'react'
import LayOut from './LayOut'
import Product from '../Product'
import product1 from "../../Assets/product_1.png"
import "../../style/propuler.css"

export default function Propuler() {
    return (
        <LayOut>
            <div className='title'>
                <h1>popular in women</h1>
                <div className='row' />
            </div>
            <div className='pop-product'>
                <Product discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit animi" price="35" del="50" img={product1}></Product>
                <Product discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit animi" price="35" del="50" img={product1}></Product>
                <Product discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit animi" price="35" del="50" img={product1}></Product>
                <Product discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit animi" price="35" del="50" img={product1}></Product>

            </div>
            </LayOut>
    )
}
