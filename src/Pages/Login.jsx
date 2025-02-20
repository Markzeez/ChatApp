import React from 'react';


const Login = () => {
  return (
    <div className='bg-[#a7bcff] h-[100vh] flex items-center justify-center '>
        <div className='bg-white px-[20px] py-[40px] rounded-xl flex flex-col gap-2  items-start '>
            <form className='flex flex-col gap-3 items-center justify-center ' action="">
                <span className='text-[#5d5b8d] font-bold text-2xl text-center'>Lama Chat</span>
                <span className='text-[#5d5b8d] text-xl text-center '>Login</span>
               
                <input className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none' type="email" placeholder='email' />
                <input className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none' type="password" placeholder='password' />
               
                <button className='w-[280px] px-3 bg-[#7b96ec] text-white font-bold border-none cursor-pointer'>Sign in</button>
                <p className='text-[#5d5b8d] text-xs mt-2.5'>You don't have an account? Register</p>

            </form>
        </div>
    </div>
  )
}

export default Login