import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div key={props.productId} className='py-3 px-1 w-[270px] cursor-pointer'>
      <div className='p-4 flex flex-col border rounded-md gap-1'>
        <div className='border-b-2 w-full py-4'>
          <Link to={`/Product/${props.productId}`}>
            <img className='h-32 mx-auto' src={props.productImage} alt="product" />
          </Link>
        </div>
        <div>
          <p className=' h-12 overflow-hidden font-semibold'>{props.productTitle}</p>
        </div>
        <div>
          <p className='text-red-500'>${props.productPrice} <s className='text-gray-500 text-sm'>$1000</s></p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='h-[18px]' src={(`ratings/rating-${props.rating}.png`)} alt="rating" /> <span>({props.ratingCount})</span>
        </div>
        <div>
          <button className='bg-black w-full text-white p-2 rounded-sm mt-2'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Item