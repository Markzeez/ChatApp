import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FcVideoCall } from 'react-icons/fc';
import { BiUserPlus } from 'react-icons/bi';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className="h-[50px] bg-[#5d5b8d] flex items-center justify-between p-[10px] text-[#d3d3d3]">
        <span>Jane</span>
        <div className="flex gap-2.5">
          <FcVideoCall className="text-white cursor-pointer h-[24px]" />
          <BiUserPlus className="text-white cursor-pointer h-[24px]" />
          <BsThreeDots className="text-white cursor-pointer h-[24px]" />
        </div>
      </div>
      <Messages />
      <Input onSend={function (message: string): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default Chat;
