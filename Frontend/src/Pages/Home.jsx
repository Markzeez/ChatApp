import React from 'react'
import Sidebar from '../Component/Sidebar'
import Chat from '../Component/Chat'

const Home = () => {
  return (
    <div className='bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
        <div className='border-white border rounded-lg w-[65%] h-[80%] flex overflow-hidden'>
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home