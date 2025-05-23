import React, { useState } from 'react';

type InputProps = {
  onSend: (message: string) => void;
};

const Input: React.FC<InputProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l-md p-2"
        placeholder="Type a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded-r-md" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default Input;
