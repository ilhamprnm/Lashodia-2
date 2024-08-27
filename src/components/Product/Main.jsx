import React from 'react'
import { products } from '../../data/product'

const Main = () => {
  return (
    <div className='mt-[130px] px-2 min-[876px]:px-20 flex flex-col gap-3 py-10 mb-20'>
        <div className='mb-16'>
          <p><span className='text-slate-500'>Home</span> / Product</p>
        </div>
      
        <div className='flex gap-10'>
          <div className='flex-1 flex gap-2'>
            <div className='flex flex-col gap-2'>
              <div>
                <img className='h-32 p-2 px-7 shadow-surround rounded' src={products[0].image} alt="product-image" />
              </div>
              <div>
                <img className='h-32 p-2 px-7 shadow-surround rounded' src={products[0].image} alt="product-image" />
              </div>
              <div>
                <img className='h-32 p-2 px-7 shadow-surround rounded' src={products[0].image} alt="product-image" />
              </div>
            </div>
            <div className='flex-1 shadow-surround rounded-sm flex items-center'>
              <img className='h-96 p-2 rounded mx-auto ' src={products[0].image} alt="product-image" />
            </div>
          </div>

          <div className='flex-1'>
            asd
          </div>
        </div>
      </div>
  )
}

export default Main