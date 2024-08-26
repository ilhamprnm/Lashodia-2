import React from 'react'
import data1 from '../../images/about-data-1.png'
import data2 from '../../images/about-data-2.png'
import data3 from '../../images/about-data-3.png'
import data4 from '../../images/about-data-4.png'

const Data = () => {
  return (
    <div className='px-2 min-[876px]:px-20 flex flex-wrap justify-center gap-3 mb-20'>
      <div className='border p-4 min-w-[200px] flex flex-col gap-2 items-center'>
        <img className='w-16' src={data1} alt="data-icon" />
        <h2 className='font-bold text-xl'>10.5K</h2>
        <p className='text-sm whitespace-nowrap'>Sellers active our site</p>
      </div>
      
      <div className='border p-4 min-w-[200px] flex flex-col gap-2 items-center'>
        <img className='w-16' src={data2} alt="data-icon" />
        <h2 className='font-bold text-xl'>33K</h2>
        <p className='text-sm whitespace-nowrap'>Monthly Product Sale</p>
      </div>
      <div className='border p-4 min-w-[200px] flex flex-col gap-2 items-center'>
        <img className='w-16' src={data3} alt="data-icon" />
        <h2 className='font-bold text-xl'>45.5K</h2>
        <p className='text-sm whitespace-nowrap'>Customer active in our site</p>
      </div>
      <div className='border p-4 min-w-[200px] flex flex-col gap-2 items-center'>
        <img className='w-16' src={data4} alt="data-icon" />
        <h2 className='font-bold text-xl'>25K</h2>
        <p className='text-sm whitespace-nowrap'>Anual gross sale in our site</p>
      </div>
      
    </div>
  )
}

export default Data