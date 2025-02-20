import React, { useState } from 'react';
import { FcAddImage } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {  auth, getStorage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Register = () => {
  const [err, setErr] = useState(false)

  const handleSumbit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files [0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email ,password);

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
        (error) => {
          setErr(true);
         },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL
            });
          });
        }
      );
    } catch (err){
setErr(true);
  }
  
  };
  return (
    <div className='bg-[#a7bcff] h-[100vh] flex items-center justify-center  '>
        <div className='bg-white px-[20px] py-[40px] rounded-xl flex flex-col gap-2  items-start '>
            <form onSubmit={handleSumbit} className='flex flex-col gap-3 items-center justify-center ' action="">
                <span className='text-[#5d5b8d] font-bold text-2xl text-center'>Lama Chat</span>
                <span className='text-[#5d5b8d] text-xl text-center '>Register</span>
                <input className='p-[10px] w-[280px] border-b-2 border-[#a7bcff]  focus:outline-none ' type="text" placeholder='display name' />
                <input className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none ' type="email" placeholder='email' />
                <input className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none' type="password" placeholder='password' />
                <input style={{display:"none"}} className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] ' id='file' type="file" />
                <label className='flex justify-center gap-2.5 text-[#8da4f1] text-xs cursor-pointer' htmlFor="file" >
                 <FcAddImage className='justify-start items-start ' size={45}/>
                  <span>Add an avatar</span>
                </label>
                <button className='w-[280px] px-3 bg-[#7b96ec] text-white font-bold border-none cursor-pointer'>Sign up</button>
                <p className='text-[#5d5b8d] text-xs mt-2.5'>You do have an account? Login</p>
            {err && <span>Something went wrong</span>}
            </form>
        </div>
    </div>
  )
}

export default Register