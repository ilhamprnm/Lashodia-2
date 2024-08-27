import React from 'react'
import Navbar from './Home/Navbar'
import Footer from './Home/Footer'
import Copyright from './Home/Copyright'

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className='mt-[130px] px-2 min-[876px]:px-20 flex flex-col gap-3 py-10 mb-20'>
        <div className='mb-16'>
          <p><span className='text-slate-500'>Home</span> / 404 Error</p>
        </div>
      
        <div className='text-center flex flex-col gap-6'>
          <div>
            <h1 className='font-bold text-8xl'>404 Not Found</h1>
          </div>

          <div>
            <p>Your visited page not found. You may go home page.</p>
          </div>

          <div>
            <button className='mt-12 py-2 px-4 text-white rounded bg-[#da4445] font-semibold'>
              Back to home page
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default ErrorPage