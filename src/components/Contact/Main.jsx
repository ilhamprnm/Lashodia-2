import React from 'react'
import callIcon from '../../icons/Contact/icons-phone.png'
import emailIcon from '../../icons/Contact/icons-mail.png'

const Main = () => {
  return (
    <div className='mt-[130px] px-2 min-[876px]:px-20 flex flex-col gap-3 py-10 mb-20'>
      <div className='mb-16'>
        <p><span className='text-slate-500'>Home</span> / Contact</p>
      </div>
      
      <div className='flex flex-col min-[768px]:flex-row items-center min-[768px]:items-start gap-4'>

        <div>
          <div className='shadow-surround rounded-sm flex-1 max-w-[340px] p-6'>
            <div className='flex flex-col gap-3 pb-4 border-b border-b-black'>
              <div className='flex gap-3 items-center'>
                <div>
                  <img className='h-7' src={callIcon} alt="call-icon" />
                </div>
                <div>
                  <p className='font-semibold'>Call us</p>
                </div>
              </div>

              <div>
                <p>We are available 24/7, 7 days a week</p>
              </div>

              <div>
                <p>Phone: +6287884500179</p>
              </div>
            </div>

            <div className='flex flex-col gap-3 pt-4 '>
              <div className='flex gap-3 items-center'>
                <div>
                  <img className='h-7' src={emailIcon} alt="call-icon" />
                </div>
                <div>
                  <p className='font-semibold'>Email us</p>
                </div>
              </div>

              <div>
                <p>Fill out our form and we will contact you within 24 hours.</p>
              </div>

              <div>
                <p>Email: milhamprnm@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
        

        <div className='shadow-surround rounded-sm flex-1 p-6 flex flex-col gap-5'>
          <div className='flex gap-3'>
            <div className='flex-1'>
              <input className='w-full bg-gray-200 rounded-sm p-1 focus:outline-none' placeholder='Name' type="text" />
            </div>
            <div className='flex-1'>
              <input className='w-full bg-gray-200 rounded-sm p-1 focus:outline-none' placeholder='Email' type="email" />
            </div>
            <div className='flex-1'>
              <input className='w-full bg-gray-200 rounded-sm p-1 focus:outline-none' placeholder='Your Phone' type="text" />
            </div>
          </div>

          <div className='h-[200px]'>
            <textarea className='bg-gray-200 w-full h-full p-1 focus:outline-none rounded-sm' placeholder='Your Message' name="" id=""></textarea>
          </div>

          <div className='flex justify-end'>
            <button className='bg-[#da4445] text-white py-2 px-5 rounded-sm'>
              Send Your Message
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Main