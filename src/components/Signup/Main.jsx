import React, { useState } from 'react'
import sideImage from '../../images/side-image.png'


const Main = () => {

  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value })
    
  }

  const handleSignup = async () => {
    console.log(formData)
    let responseData;
    await fetch('http://localhost:4000/signup', {
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
        <img className='w-[600px]' src={sideImage} alt="side-image" />
      </div>
      <div className='py-20 min-[720px]:py-10 min-[876px]:ml-20 px-4 flex flex-col gap-8 '>
        <div className='flex flex-col gap-2 w-full'>
          <h2 className='text-2xl font-semibold tracking-wide w-full'>Creat an account</h2>
          <p className='text-sm'>Enter your details below</p>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <div className='w-[300px]'>
            <input className='w-full border-b p-1 text-lg focus:outline-none' name='username' value={formData.username} onChange={handleChange} type="text" placeholder='Name'/>
          </div>
          <div className='w-[300px]'>
            <input className='w-full border-b p-1 text-lg focus:outline-none' name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Email or Phone Number'/>
          </div>
          <div className='w-[300px]'>
            <input className='w-full border-b p-1 text-lg focus:outline-none' name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Password'/>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-4'>
          <div>
            <button className='bg-red-500 w-full text-white p-2 px-8 rounded' onClick={handleSignup}>
              Create account
            </button>
          </div>
          <div>
            <button className=' w-full p-2 px-8 rounded border'>
              Sign up with Goole
            </button>
          </div>
          <div className='text-center '>
            <p>Already have account? <a href='/login' className='underline'>Log In</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main