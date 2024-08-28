import React from 'react'
import CarouselRelatedProduct from './CarouselRelatedProduct'
import { products } from '../../data/product'
import { useParams } from 'react-router-dom'

const BestSelling = () => {
  const {productId} = useParams();
  const productInDisplay = products.find((e) => e.id === Number(productId))

  return (
    <div className='mt-14 p-2 min-[876px]:px-20 flex flex-col gap-3'>
      <div className='flex gap-3'>
        <div className='w-5 h-7 bg-red-500 rounded-sm'>
        </div>
        <div className='flex items-center'>
          <span className='text-red-500'>Related Item</span>
        </div>
      </div>

      <CarouselRelatedProduct productInDisplay={productInDisplay}/>
      <hr className='mt-8'/>
    </div>
  )
}

export default BestSelling