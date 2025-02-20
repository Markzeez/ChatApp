import React from 'react';
import { CgAttachment } from 'react-icons/cg';
import { FcAddImage } from 'react-icons/fc';

const Input = ({ placeholder, onSend, onFileChange }) => {
  const handleSendClick = () => {
    if (onSend) onSend();
  };

  const handleFileChange = (event) => {
    if (onFileChange) onFileChange(event.target.files[0]);
  };

  return (
    <div className="h-[50px] bg-white p-[10px] flex items-center justify-between">
      <input
        type="text"
        placeholder={placeholder || 'Type something...'}
        className="w-full border-none outline-none text-[#2f2d52] text-lg placeholder:text-[#d3d3d3]"
      />
      <div className="flex items-center gap-[10px] cursor-pointer">
        <CgAttachment className="h-[24px]" />
        <input 
          type="file" 
          id="file" 
          style={{ display: "none" }} 
          onChange={handleFileChange} 
        />
        <label htmlFor="file">
          <FcAddImage className="h-[24px]" />
        </label>
        <button 
          className="border-none px-4 py-2 text-white bg-[#8da4f1]" 
          onClick={handleSendClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
