import React from 'react';
import ChatItem from './ChatItem';

const chatData = [
  { image: '', name: 'Jane', message: 'Hello' },
  { image: '', name: 'John', message: 'How are you?' },
  { image: '', name: 'Doe', message: 'Good morning!' },
];

const Chats = () => {
  return (
    <div>
      {chatData.map((chat, index) => (
        <ChatItem key={index} image={chat.image} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default Chats;
