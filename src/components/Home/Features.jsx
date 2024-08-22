import React from 'react'
import delivery from '../../images/delivery.png'
import customerService from '../../images/customer-service.png'
import guarantee from '../../images/guarantee.png'
import arrowUp from '../../icons/arrow-up.png'

const Features = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling
    });
  };

  return (
    <div className='p-2 min-[876px]:px-20 flex flex-col justify-center gap-10 mt-10 mb-5'>
      <div className='flex flex-col min-[660px]:flex-row gap-10 min-[660px]:gap-20 justify-center'>
        <div className='flex flex-col items-center text-center justify-center'>
          <div>
            <img src={delivery} alt="delivery" />
          </div>
          <div className='mt-3'>
            <h2 className='font-semibold text-xl'>FREE AND FAST DELIVERY</h2>
          </div>
          <div>
            <p className='text-sm'>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className='flex flex-col items-center text-center justify-center'>
          <div>
            <img src={customerService} alt="" />
          </div>
          <div className='mt-3'>
            <h2 className='font-semibold text-xl'>24/7 CUSTOMER SERVICE</h2>
          </div>
          <div>
            <p className='text-sm'>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className='flex flex-col items-center text-center justify-center'>
          <div>
            <img src={guarantee} alt="" />
          </div>
          <div className='mt-3'>
            <h2 className='font-semibold text-xl'>MONEY BACK GUARANTEE</h2>
          </div>
          <div>
            <p className='text-sm'>We return money within 30 days</p>
          </div>
        </div>
      </div>
      <div className='flex justify-end items-end'>
        <div className='flex'>
          <button className='p-3 bg-slate-200 rounded-full' onClick={scrollToTop}><img className='h-5' src={arrowUp} alt="arrow-up" /></button>
        </div>
      </div>
    </div>
  )
}

export default Features