import React, { useContext, useState } from 'react'
import '../../cart.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCartData, removeFromCart } from '../../store/slices/userSlice'

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='flex font-semibold border p-4'>
        
        <Link to={`/Product/${props.productId}`} className='flex-1 flex gap-3 items-center max-w-[268px] overflow-hidden'>
          <img className='h-14' src={props.productImage} alt="product-image" />
          <p className='text-sm font-normal truncate'>{props.productTitle}</p>
        </Link>
        <div className='flex-1 flex items-center justify-center'>
          <p >${props.productPrice}</p>
        </div>
        <div className='flex-1 flex items-center justify-center '>
          <p>{props.productQuantity}</p>
        </div>
        <div className='flex-1 flex items-center justify-center'>
          ${ props.productPrice * props.productQuantity}
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <p className='font-normal hover:text-red-500 cursor-pointer' onClick={() => {dispatch(removeFromCart(props)); dispatch(fetchCartData())}}>hapus</p>
        </div>
      </div>
  )
}

export default CartItem