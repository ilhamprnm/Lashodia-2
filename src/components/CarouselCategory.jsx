import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import phoneIcon from '../icons/phone-icon.png'
import computerIcon from '../icons/computer-icon.png'
import smartwatchIcon from '../icons/smartwatch-icon.png'
import cameraIcon from '../icons/camera-icon.png'
import gamingIcon from '../icons/gaming-icon.png'
import headphoneIcon from '../icons/headphone-icon.png'
import clothesIcon from '../icons/clothes-icon.png'
import jacketIcon from '../icons/jacket-icon.png'

const CarouselCategory = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1164 },
      items: 6
    },
    desktop2: {
      breakpoint: { max: 1164, min: 992 },
      items: 5
    },
    desktop3: {
      breakpoint: { max: 992, min: 684 },
      items: 4
    },
    tablet: {
      breakpoint: {max: 684, min: 522},
      items: 3
    }, 
    tablet2: {
      breakpoint: {max: 522, min: 361},
      items: 2
    },
    tablet3: {
      breakpoint: {max: 361, min: 0},
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive} >
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={phoneIcon} alt="phone-icon" />
        <p className='font-semibold' >Phones</p>
      </div>
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={computerIcon} alt="computer-icon" />
        <p className='font-semibold' >Computers</p>
      </div>  
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={smartwatchIcon} alt="smartwatch-icon" />
        <p className='font-semibold' >Smartwatch</p>
      </div>
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={cameraIcon} alt="camera-icon" />
        <p className='font-semibold' >Camera</p>
      </div>
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={headphoneIcon} alt="headphone-icon" />
        <p className='font-semibold' >Headphones</p>
      </div>
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={gamingIcon} alt="gaming-icon" />
        <p className='font-semibold' >Gaming</p>
      </div>
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={clothesIcon} alt="clothes-icon" />
        <p className='font-semibold' >Clothes</p>
      </div>
      <div className='p-4 items-center border-2 border-slate-300 w-40 flex flex-col gap-3 rounded min-[361px]:mx-0 mx-auto cursor-pointer'>
        <img className='h-10' src={jacketIcon} alt="jacket-icon" />
        <p className='font-semibold' >Jackets</p>
      </div>
    </Carousel>
  )
}

export default CarouselCategory