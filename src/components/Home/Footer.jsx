import React from 'react'
import qrcode from '../../images/qr-code-iport.png'
import googlePlay from '../../images/google-play.png'
import appStore from '../../images/appstore.png'

const Footer = () => {
  return (
    <div className='p-2 py-10 min-[876px]:px-20 flex gap-5 flex-wrap justify-between bg-black'>
      <div className='text-white flex-1'>
        <h2 className='font-semibold text-xl'>Exclusive</h2>
        <ul className='text-sm flex gap-1 flex-col mt-3'>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a href="">Subscribe</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a href="">Get 10% off your first order</a>
          </li>
        </ul>
      </div>
      <div className='text-white flex-1'>
        <h2 className='font-semibold text-xl'>Support</h2>
        <ul className='text-sm flex gap-1 flex-col mt-3'>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a >Tangerang Selatan, Banten.</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>milhamprnm@gmail.com</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>+62 878-8450-0179</a>
          </li>
        </ul>
      </div>
      <div className='text-white flex-1'>
        <h2 className='font-semibold text-xl'>Account</h2>
        <ul className='text-sm flex gap-1 flex-col mt-3'>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a >My Account</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>Login / Register</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>Cart</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>Wishlist</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>Shop</a>
          </li>
        </ul>
      </div>
      <div className='text-white flex-1'>
        <h2 className='font-semibold text-xl'>Quick Link</h2>
        <ul className='text-sm flex gap-1 flex-col mt-3'>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a >Privacy Policy</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>Terms of Use</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>FAQ</a>
          </li>
          <li className='hover:text-slate-300 cursor-pointer'>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className='text-white flex-1'>
        <h2 className='font-semibold text-xl'>Download App</h2>
        <ul className='text-sm flex gap-1 flex-col mt-3'>
          <li className='hover:text-slate-300 cursor-pointer'> 
            <a>Save $3 with App new User Only</a>
          </li>
        </ul>
        <div className='flex gap-3 mt-3 min-w-48'>
          <div>
            <img className='h-[82px] w-[82px]' src={qrcode} alt="qr-code" />
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <img src={googlePlay} alt="google-play" />
            </div>
            <div>
              <img src={appStore} alt="app-store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer