import React from 'react'


const Navbar = () => {
  return (
    <div className='flex items-center bg-[#2f2d52] h-[50px] px-2.5 justify-between text-[#ddddf7]'>
<span className='font-bold'>Lama chat</span>
<div className='flex gap-2.5'>
    <img src="C:\Users\USER\Downloads\pexels-hicret-16953646.jpg" alt="" className='bg-[#ddddf7] h-[24px] w-[24px] rounded-xl object-cover' />
    <span className=''>John</span>
    <button className='bg-[#5d5b8d] p-1.5 text-[#ddddf7] text-xs'>logout</button>
</div>
    </div>
  )
}

export default Navbar