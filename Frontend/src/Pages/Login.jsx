import React, { useState, useEffect } from 'react';

import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = "http://localhost:5000"; // change this to your server URL

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to socket server on mount
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    // Cleanup socket on unmount
    return () => newSocket.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Emit login event with user data
      if (socket) {
        socket.emit('userLoggedIn', {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
        });
      }

      // You can redirect user or update UI here after login

    } catch (error) {
      setErr(true);
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='bg-[#a7bcff] h-[100vh] flex items-center justify-center '>
      <div className='bg-white px-[20px] py-[40px] rounded-xl flex flex-col gap-2  items-start '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center justify-center '>
          <span className='text-[#5d5b8d] font-bold text-2xl text-center'>Lama Chat</span>
          <span className='text-[#5d5b8d] text-xl text-center '>Login</span>

          <input
            className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none'
            type="email"
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none'
            type="password"
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className='w-[280px] px-3 bg-[#7b96ec] text-white font-bold border-none cursor-pointer'>Sign in</button>

          <p className='text-[#5d5b8d] text-xs mt-2.5'>You don't have an account? Register</p>

          {err && <span className="text-red-500">Login failed. Please check your credentials.</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
