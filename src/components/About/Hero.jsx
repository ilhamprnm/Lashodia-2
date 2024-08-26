import React from 'react'
import aboutImage from '../../images/about-image.png'

const Hero = () => {
  return (
    <div className='mt-[130px] px-2 min-[876px]:px-20 flex flex-col gap-3 py-10 mb-10'>
      <div>
        <p><span className='text-slate-500'>Home</span> / About</p>
      </div>

      <div className='flex flex-col min-[680px]:flex-row gap-5 mt-14'>
        <div className='flex-1 flex flex-col gap-4'>
          <div>
            <h2 className='font-bold text-3xl'>Our Story</h2>
          </div>
          <div className='flex flex-col gap-4'>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
        </div>
        <div className='flex-1'>
          <img src={aboutImage} alt="Hero-image" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero