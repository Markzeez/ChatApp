import React from 'react';

type ChatItemProps = {
  image: string;
  name: string;
  message: string;
};

const ChatItem: React.FC<ChatItemProps> = ({ image, name, message }) => (
  <div className="p-[10px] flex items-center gap-2.5 text-white cursor-pointer hover:bg-[#2f2d52]">
    <img src={image || 'https://via.placeholder.com/50'} alt={name} className="w-[50px] h-[50px] rounded-3xl object-cover" />
    <div>
      <span className="text-[24px] font-normal">{name}</span>
      <p className="text-[9px] text-[#d3d3d3]">{message}</p>
    </div>
  </div>
);

export default ChatItem;
