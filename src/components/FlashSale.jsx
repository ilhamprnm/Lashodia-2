import React, {useState, useEffect, useRef} from 'react'
import Timer from "./Timer.jsx"
import CarouselSec from "./CarouselSec.jsx"

const FlashSale = () => {

  return (
    <div className='mt-14 p-2 min-[876px]:px-20 flex flex-col gap-3'>
      <div className='flex gap-3'>
        <div className='w-5 h-7 bg-red-500 rounded-sm'>
        </div>
        <div className='flex items-center'>
          <span className='text-red-500'>Today's</span>
        </div>
      </div>

      <div className=' flex min-[557px]:gap-10 gap-4 flex-wrap duration-500'>
        <div className='flex items-end'>
          <h1 className='font-bold text-5xl duration-500'>Flash Sale</h1>
        </div>
        <Timer />
      </div>

      <CarouselSec />
      <hr className='mt-8'/>
    </div>
    
  )
}

export default FlashSale