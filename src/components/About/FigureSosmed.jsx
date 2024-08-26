import React from 'react'
import x from '../../icons/About/x.png';
import instagram from '../../icons/About/instagram.png'
import linkedin from '../../icons/About/linkedin.png'

const FigureSosmed = () => {
  return (
    <div className='flex justify-center gap-3'>
      <img className='h-7 p-1 hover:bg-slate-200 rounded cursor-pointer' src={x} alt="x-icon" />
      <img className='h-7 p-1 hover:bg-slate-200 rounded cursor-pointer' src={instagram} alt="x-icon" />
      <img className='h-7 p-1 hover:bg-slate-200 rounded cursor-pointer' src={linkedin} alt="x-icon" />
    </div>
  )
}

export default FigureSosmed