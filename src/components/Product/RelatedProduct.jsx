import React, { useContext } from 'react'
import CarouselRelatedProduct from './CarouselRelatedProduct'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../data/ShopContext'

const BestSelling = () => {

  const allProducts = useContext(ShopContext).products;
  const {productId} = useParams();
  const productInDisplay = allProducts.find((e) => e.id === Number(productId))

  return (
    <div className='mt-14 p-2 min-[876px]:px-20 flex flex-col gap-3 pb-20'>
      <div className='flex gap-3'>
        <div className='w-5 h-7 bg-red-500 rounded-sm'>
        </div>
        <div className='flex items-center'>
          <span className='text-red-500'>Related Item</span>
        </div>
      </div>

      <CarouselRelatedProduct productInDisplay={productInDisplay}/>
      
    </div>
  )
}

export default BestSelling