import React from 'react'

const Search = () => {
  return (
    <div className=' border-b border-gray-400'>
        <div className='p-[10px] '>
            <input type="text" placeholder='Find a user' className='bg-[transparent] border-none text-white outline-none placeholder:text-lightgray' />
        </div>
        <div className='p-[10px] flex items-center gap-2.5 text-white cursor-pointer hover:bg-[#2f2d52]'>
            <img src="" alt="" className='w-[50px] h-[50px] rounded-3xl object-cover' />
            <div>
              <span>Jane</span>  
            </div>
        </div>
    </div>
  )
}
 
export default Search