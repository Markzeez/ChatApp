import React from 'react';
import Input from './Input';

const ChatInput = () => {
  const handleSend = () => {
    console.log('Message sent!');
  };

  const handleFileChange = (file) => {
    console.log('File selected:', file.name);
  };

  return (
    <div>
      <Input 
        placeholder="Write a message..." 
        onSend={handleSend} 
        onFileChange={handleFileChange} 
      />
    </div>
  );
};

export default ChatInput;
