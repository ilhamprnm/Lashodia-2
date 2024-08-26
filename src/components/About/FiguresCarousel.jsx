import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import figure1 from '../../images/About/figure-1.jpg';
import figure2 from '../../images/About/figure-2.jpg';
import figure3 from '../../images/About/figure-3.jpg';
import figure4 from '../../images/About/figure-4.jpg';
import figure5 from '../../images/About/figure-5.jpg';
import FigureSosmed from './FigureSosmed';



const Figures = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 800, min: 520 },
      items: 2
    },
    mobileMini: {
      breakpoint: { max: 520, min: 0 },
      items: 1
    }
  };
  
  return (
    <Carousel responsive={responsive}>
      <div className='flex flex-col gap-3 items-center p-2'>
        <div>
          <img className='h-80 rounded' src={figure1} alt="figure-1" />
        </div>
        <div>
          <div className='flex flex-col gap-1 text-center'>
            <h2 className='font-bold text-2xl'>Tom Cruise</h2>
            <p className='text-sm'>Founder & Chairman</p>
            <FigureSosmed />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center p-2'>
        <div>
          <img className='h-80 rounded' src={figure2} alt="figure-1" />
        </div>
        <div>
          <div className='flex flex-col gap-1 text-center'>
            <h2 className='font-bold text-2xl'>Jason Statham</h2>
            <p className='text-sm'>Managing Director</p>
            <FigureSosmed />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center p-2'>
        <div>
          <img className='h-80 rounded' src={figure3} alt="figure-1" />
        </div>
        <div>
          <div className='flex flex-col gap-1 text-center'>
            <h2 className='font-bold text-2xl'>Peter Parker</h2>
            <p className='text-sm'>Product Designer</p>
            <FigureSosmed />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center p-2'>
        <div>
          <img className='h-80 rounded' src={figure4} alt="figure-1" />
        </div>
        <div>
          <div className='flex flex-col gap-1 text-center'>
            <h2 className='font-bold text-2xl'>Chris Hemsworth</h2>
            <p className='text-sm'>Frontend Developer</p>
            <FigureSosmed />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center p-2'>
        <div>
          <img className='h-80 rounded' src={figure5} alt="figure-1" />
        </div>
        <div>
          <div className='flex flex-col gap-1 text-center'>
            <h2 className='font-bold text-2xl'>Tom Hiddleston</h2>
            <p className='text-sm'>Backend Developer</p>
            <FigureSosmed />
          </div>
        </div>
      </div>
    </Carousel>
    
  )
}

export default Figures