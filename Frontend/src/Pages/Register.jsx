import React, { useState, useEffect } from 'react';
import { FcAddImage } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5000"; // change to your socket server URL

const Register = () => {
  const [err, setErr] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize socket connection once component mounts
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // 1. Register user with Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // 2. Upload avatar image to Firebase Storage
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Optional: You can track progress here if you want
        },
        (error) => {
          setErr(true);
        },
        async () => {
          // 3. Get download URL after upload completes
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // 4. Update user profile with display name and photoURL
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });

          // 5. Emit a socket event to notify server (or others) that user registered
          if (socket) {
            socket.emit("newUserRegistered", {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          }
        }
      );
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="bg-[#a7bcff] h-[100vh] flex items-center justify-center">
      <div className="bg-white px-[20px] py-[40px] rounded-xl flex flex-col gap-2 items-start">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center justify-center"
          action=""
        >
          <span className="text-[#5d5b8d] font-bold text-2xl text-center">
            Lama Chat
          </span>
          <span className="text-[#5d5b8d] text-xl text-center ">Register</span>
          <input
            className="p-[10px] w-[280px] border-b-2 border-[#a7bcff]  focus:outline-none "
            type="text"
            placeholder="display name"
            required
          />
          <input
            className="p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none "
            type="email"
            placeholder="email"
            required
          />
          <input
            className="p-[10px] w-[280px] border-b-2 border-[#a7bcff] focus:outline-none"
            type="password"
            placeholder="password"
            required
          />
          <input
            style={{ display: "none" }}
            className="p-[10px] w-[280px] border-b-2 border-[#a7bcff]"
            id="file"
            type="file"
            required
          />
          <label
            className="flex justify-center gap-2.5 text-[#8da4f1] text-xs cursor-pointer"
            htmlFor="file"
          >
            <FcAddImage className="justify-start items-start" size={45} />
            <span>Add an avatar</span>
          </label>
          <button className="w-[280px] px-3 bg-[#7b96ec] text-white font-bold border-none cursor-pointer">
            Sign up
          </button>
          <p className="text-[#5d5b8d] text-xs mt-2.5">
            You do have an account? Login
          </p>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Register;
