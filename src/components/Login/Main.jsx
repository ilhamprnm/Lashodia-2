import React, { useState } from 'react'
import sideImage from '../../images/side-image.png'

const Main = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value })
    
  }

  const handleLogin = async () => {
    console.log(formData)
    let responseData;
    await fetch('http://localhost:4000/login', {
      method:'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data)=>{responseData = data});

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.errors)
    }
  }

  return (
    <div className='mt-[130px] px-2 min-[876px]:px-20 flex justify-center pb-14'>
      <div className='min-[720px]:block hidden'>
        <img className='w-[500px]' src={sideImage} alt="side-image" />
      </div>
      <div className='py-32 min-[720px]:py-10 min-[876px]:ml-20 px-4 flex flex-col gap-8 '>
        <div className='flex flex-col gap-2 w-full'>
          <h2 className='text-2xl font-semibold tracking-wide w-full'>Log in to Exclusive</h2>
          <p className='text-sm'>Enter your details below</p>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <div className='w-[300px]'>
            <input className='w-full border-b p-1 text-lg focus:outline-none' name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Email or Phone Number'/>
          </div>
          <div className='w-[300px]'>
            <input className='w-full border-b p-1 text-lg focus:outline-none' name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Password'/>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='bg-slate-100'>
            <button className='bg-red-500 text-white p-2 px-8 rounded' onClick={handleLogin}>
              Log In
            </button>
          </div>
          <div>
            <span className='text-red-500 cursor-pointer'>Forget password?</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main