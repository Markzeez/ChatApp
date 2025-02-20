import React from 'react';

const ChatItem = ({ image, name, message }) => (
  <div className="p-[10px] flex items-center gap-2.5 text-white cursor-pointer hover:bg-[#2f2d52]">
    <img src={image} alt={name} className="w-[50px] h-[50px] rounded-3xl object-cover" />
    <div>
      <span className="text-[24px] font-normal">{name}</span>
      <p className="text-[9px] text-[#d3d3d3]">{message}</p>
    </div>
  </div>
);

const Chats = () => {
  const chatData = [
    { image: '', name: 'Jane', message: 'Hello' },
    { image: '', name: 'John', message: 'How are you?' },
    { image: '', name: 'Doe', message: 'Good morning!' },
  ];

  return (
    <div>
      {chatData.map((chat, index) => (
        <ChatItem
          key={index}
          image={chat.image}
          name={chat.name}
          message={chat.message}
        />
      ))}
    </div>
  );
};

export default Chats;
