import React from 'react'

export default function Product({discription,img,price,del}) {
  return (
    <div className='product-container'>
        <img src={img} alt="product" />
        <p>{discription}</p>
        <div className='price'>
            <span>${price}</span>
            <span><del>${del}</del></span>
        </div>
    </div>
  )
}
