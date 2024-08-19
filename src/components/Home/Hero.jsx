import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ads1 from "../../images/ads-1.jpg"
import ads2 from "../../images/ads-2.webp"
import ads3 from "../../images/ads-3.webp"
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import { RxDotFilled } from 'react-icons/rx'


const Hero = () => {
  const ads = [
    {image: ads1},
    {image: ads2},
    {image: ads3}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  function handleNext() {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
    resetTimeout();
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(2)
    }
    resetTimeout()
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(handleNext, 5000);
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(handleNext, 5000);

    // Cleanup timeout on component unmount
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  


  return (
    <div className='mt-[130px] p-2 min-[876px]:px-20 flex gap-4'>
      <div className='hidden min-[800px]:block w-80 border-r-[1px] '>
        <ul className='flex flex-col gap-1 mr-2'>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Woman's fashion</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Men's fashion</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Electronics</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Home & Lifestyle</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Medicine</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Sports & Outdoor</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Baby's and Toys</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Groceries & Pets</li>
          <li className='hover:bg-slate-200 p-1 rounded-md cursor-pointer transition-colors'>Health & Beauty</li>
        </ul>
      </div>
      <div className=' w-full flex flex-col gap-2 justify-center items-center'>

        {/* using backgroundImage */}
        {/* <div className='relative w-full h-full  bg-contain bg-center bg-no-repeat duration-500 rounded-md' style={{backgroundImage : `url(${ads[currentIndex].image})`}}>
          <div className='absolute top-[40%] left-0 text-2xl rounded-sm p-2 text-white bg-black/20 cursor-pointer hover:bg-black/40 active:bg-black/70'>
            <BsChevronCompactLeft onClick={handlePrev} size={30}/>
          </div>
          <div className='absolute top-[40%] right-0 text-2xl rounded-sm p-2 text-white bg-black/20 cursor-pointer hover:bg-black/40 active:bg-black/70'>
            <BsChevronCompactRight onClick={handleNext} size={30}/>
          </div>
        </div> */}

        <div className='relative rounded-md overflow-hidden' style={{backgroundImage : `url(${ads[currentIndex].image})`}}>
          <img className='w-[650px]' src={ads[currentIndex].image} alt="ads-image" />
          <div className='absolute top-[40%] left-0 text-2xl rounded-sm p-2 text-white bg-black/20 cursor-pointer hover:bg-black/40 active:bg-black/70'>
            <BsChevronCompactLeft onClick={handlePrev} size={30}/>
          </div>
          <div className='absolute top-[40%] right-0 text-2xl rounded-sm p-2 text-white bg-black/20 cursor-pointer hover:bg-black/40 active:bg-black/70'>
            <BsChevronCompactRight onClick={handleNext} size={30}/>
          </div>
        </div>
        
        <div className='flex gap-2'>
          {ads.map((ad, adIndex) => {
            return <div key={`${adIndex}`} className='text-2xl cursor-pointer text-gray-200' style={{color: adIndex === currentIndex ? "black" : 'gray'}}>
                    <RxDotFilled  />
                   </div>
            // return <div key={`${adIndex}`} className='w-2 h-2 rounded-full bg-gray-300'></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero