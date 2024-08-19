import React from 'react';
import search from "../../icons/search.png";
import wishlist from "../../icons/wishlist.png";
import cart from '../../icons/cart.png';
import { useState } from 'react';

const Navbar = () => {

  const [opened, setOpened] = useState(false);

  function handleClick ()  {
    if (opened === false) {
      const menu = document.getElementById('dropdown-menu');
      menu.style.transform = 'translateY(0)';
  
      const hamOne = document.getElementById('ham-1');
      const hamTwo = document.getElementById('ham-2');
      const hamThree = document.getElementById('ham-3');
  
      hamOne.style.transform = 'translate3d(0, 6px, 0) rotate(45deg)';
      hamTwo.style.transform = 'scale(0)';
      hamThree.style.transform = 'translate3d(0, -6px, 0) rotate(-45deg)';
  
      setOpened(true)
    } else {
      const menu = document.getElementById('dropdown-menu');
      menu.style.transform = 'translateY(-470px)';
  
      const hamOne = document.getElementById('ham-1');
      const hamTwo = document.getElementById('ham-2');
      const hamThree = document.getElementById('ham-3');
  
      hamOne.style.transform = '';
      hamTwo.style.transform = '';
      hamThree.style.transform = '';
  
      setOpened(false)
    }
    
  }


  return (
    <div className='w-full flex flex-col fixed top-0 border-b-[1px] z-[10000] border-gray-300'>
      <div className='flex justify-center items-center bg-black p-2'>
        <div>
          <p className='text-white text-sm max-[520px]:text-[12px] max-[520px]:text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className='font-bold underline ml-1'>ShopNow</a></p>
        </div>
      </div>

      <div className='relative w-full flex justify-between p-2 pt-6 px-2 min-[876px]:px-20 bg-white'>
        <div className='font-bold text-3xl hidden min-[470px]:block'><a href="/">Lashodia.</a></div>

        <div className=' mx-2 hidden md:block '>
          <ul className='flex flex-shrink h-full justify-between gap-4 min-[950px]:gap-10 items-center font-semibold'>
            <li className='hover:border-b-2 border-slate-300 transition-all cursor-pointer'>Home</li>
            <li className='hover:border-b-2 border-slate-300 transition-all cursor-pointer'>Contact</li>
            <li className='hover:border-b-2 border-slate-300 transition-all cursor-pointer'>About</li>
            <li className='hover:border-b-2 border-slate-300 transition-all cursor-pointer'>SignUp</li>
          </ul>
        </div>

        <div className='flex flex-1 ml-3 min-[500px]:flex-none'>
          <div className=' flex flex-1 w-full h-full items-center bg-[#F5F5F5] rounded-md'>
            <input className='h-full w-full p-2 bg-transparent focus:outline-none' placeholder="Search" type="text"/>
            <a className='h-full w-14 flex items-center justify-center hover:cursor-pointer'><img className='h-6 w-6' src={search} alt="Search-icon" /></a>
          </div>

          <div className='hidden md:block'>
            <div className=' flex items-center mx-3'>
              <img  className="h-8 w-8 hover:cursor-pointer" src={wishlist} alt="wishlist-icon" />
            </div>
          </div>

          <div className='hidden md:block'>  
            <div className=' flex items-center mr-3'>
              <img className='h-7 w-7 hover:cursor-pointer' src={cart} alt="cart-icon" />
            </div>
          </div>
          
          <div className='md:hidden mx-4'>
            <button onClick={handleClick} className='flex flex-col gap-[3.5px] w-10 h-10 items-center justify-center'>
              <span id='ham-1' className='w-[25px] h-[2.5px] bg-black rounded-xl transition-transform duration-500 delay-500'></span>
              <span id='ham-2' className='w-[25px] h-[2.5px] bg-black rounded-xl transition-transform duration-500 delay-500'></span>
              <span id='ham-3' className='w-[25px] h-[2.5px] bg-black rounded-xl transition-transform duration-500 delay-500'></span>
            </button>
          </div>

          
        </div>

          <div id="dropdown-menu" className='absolute -translate-y-[470px] transition-transform duration-500 md:hidden p-4 bg-white top-[72px] left-0 right-0 w-full '>
            <ul className='flex flex-col items-center bg-slate-200 rounded-md overflow-hidden'>
              <li className='p-3 w-full text-center hover:bg-slate-300 hover:cursor-pointer font-semibold'><a href="">Home</a></li>
              <li className='p-3 w-full text-center hover:bg-slate-300 hover:cursor-pointer font-semibold'><a href="">About</a></li>
              <li className='p-3 w-full text-center hover:bg-slate-300 hover:cursor-pointer font-semibold'><a href="">Contact</a></li>
              <li className='p-3 w-full text-center hover:bg-slate-300 hover:cursor-pointer font-semibold'><a href="">SignUp</a></li>
            </ul>

            <ul className='flex flex-col items-center bg-slate-200 rounded-md mt-4 overflow-hidden'>
              <li className='p-3 w-full text-center hover:bg-slate-300 hover:cursor-pointer font-semibold'><a href="">Cart</a></li>
              <li className='p-3 w-full text-center hover:bg-slate-300 hover:cursor-pointer font-semibold'><a href="">Wishlist</a></li>
        
            </ul>
          </div>

      </div>
    </div>
  )
}

export default Navbar