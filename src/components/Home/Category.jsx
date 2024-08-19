import React from 'react'
import CarouselCategory from './CarouselCategory.jsx'

const Category = () => {
  return (
  <div className='mt-14 p-2 min-[876px]:px-20 flex flex-col gap-3'>
    <div className='flex gap-3'>
      <div className='w-5 h-7 bg-red-500 rounded-sm'>
      </div>
      <div className='flex items-center'>
        <span className='text-red-500'>Categories</span>
      </div>
    </div>

    <div className=' flex min-[557px]:gap-10 gap-4 flex-wrap duration-500 mb-6'>
      <div className='flex items-end'>
        <h1 className='font-bold text-5xl duration-500'>Browse By Category</h1>
      </div>
      
    </div>

    <CarouselCategory />
    <hr className='mt-8'/>
  </div>
  )
}

export default Category