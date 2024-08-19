import React from 'react'
import ads4 from '../../images/ads-4.png'

const Ads = () => {
  return (
    <div className='min-[600px]:mt-8 p-2 min-[876px]:px-20 flex flex-col gap-3'>
      <div className='flex gap-3 justify-center'>
        <img src={ads4} alt="ads-4" />
      </div>

      <hr className='min-[600px]:mt-8'/>
    </div>
  )
}

export default Ads