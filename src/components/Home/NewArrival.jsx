import React, { useEffect } from 'react'
import na1 from '../../images/NA-1.png'
import na2 from '../../images/NA-2.png'
import na3 from '../../images/NA-3.png'
import na4 from '../../images/NA-4.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger} from "gsap/all"
gsap.registerPlugin(ScrollTrigger);


const NewArrival = () => {

  useGSAP(() => {
    gsap.to('#NA-text', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#NA-text',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 140%',
      }
    })
  })


  return (
    <div className='mt-14 p-2 min-[876px]:px-20 flex flex-col gap-3'>
      <div className='flex gap-3'>
        <div className='w-5 h-7 bg-red-500 rounded-sm'>
        </div>
        <div className='flex items-center'>
          <span className='text-red-500'>Featured</span>
        </div>
      </div>

      <div className=' flex min-[557px]:gap-10 gap-4 flex-wrap duration-500'>
        <div className='flex items-end'>
          <h1 className='font-bold text-5xl duration-500'>New Arrival</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row mt-5 gap-5 items-center'>
        <div className='relative'>
          <div>
            <img src={na1} alt="new-arrival" />
          </div>
          <div className='absolute bottom-8 left-8 text-white flex flex-col gap-2 opacity-0 translate-y-20' id='NA-text'>
            <div>
              <h2 className='text-2xl'>PlayStation 5</h2>
            </div>
            <div>
              <p className='text-sm max-w-48'>Black and White version of the PS5 coming out on sale.</p>
            </div>
            <div>
              <a className='hover:underline' href="">Shop Now</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[22px] items-center'>
          <div className='relative'>
            <div>
              <img src={na2} alt="new-arrival" />
            </div>
            <div className='absolute bottom-4 left-4 text-white flex flex-col gap-1 opacity-0 translate-y-20' id='NA-text'>
              <div>
                <h2 className='text-xl'>Women's Collections</h2>
              </div>
              <div>
                <p className='text-xs max-w-48'>Featured woman collections that give you another vibe.</p>
              </div>
              <div>
                <a className='hover:underline text-sm' href="">Shop Now</a>
              </div>
            </div>
          </div>
          <div className='flex gap-5'>
            <div className='relative'>
              <div>
                <img src={na3} alt="new-arrival" />
              </div>
              <div className='absolute bottom-4 left-4 text-white flex flex-col gap-1 opacity-0 translate-y-20' id='NA-text'>
                <div>
                  <h2 className='text-lg'>Speakers</h2>
                </div>
                <div>
                  <p className='text-xs max-w-48'>Amazon wireless speakers</p>
                </div>
                <div>
                  <a className='hover:underline text-sm' href="">Shop Now</a>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div>
                <img src={na4} alt="new-arrival" />
              </div>
              <div className='absolute bottom-4 left-4 text-white flex flex-col gap-1 opacity-0 translate-y-20' id='NA-text'>
                <div>
                  <h2 className='text-lg'>Perfume</h2>
                </div>
                <div>
                  <p className='text-xs max-w-48'>GUCCI INTENSE OUD EDP</p>
                </div>
                <div>
                  <a className='hover:underline text-sm' href="">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='mt-8'/>
    </div>
  )
}

export default NewArrival