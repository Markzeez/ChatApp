import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className="bg-[#ddddf7] p-[10px] h-[calc(100%-100px)] overflow-scroll">
      {[...Array(8)].map((_, index) => (
        <Message key={index} />
      ))}
    </div>
  );
};

export default Messages;
