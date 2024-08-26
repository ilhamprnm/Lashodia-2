import React, { useState } from 'react'
import '../../cart.css'

const CartItem = (props) => {
  

  return (
    <div className='flex font-semibold border p-4'>
        <div className='flex-1 flex gap-3 items-center max-w-[268px] overflow-hidden'>
          <img className='h-14' src={props.productImage} alt="product-image" />
          <p className='text-sm font-normal truncate'>{props.productTitle}</p>
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <p >${props.productPrice}</p>
        </div>
        <div className='flex-1 flex items-center justify-center '>
          <input className='max-w-14 focus:outline-none quantity-input' min={0} max={100} defaultValue={1}  type="number" />
        </div>
        <div className='flex-1 flex items-center justify-center'>
          ${ props.productPrice}
        </div>
      </div>
  )
}

export default CartItem