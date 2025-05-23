import React from 'react';

type MessageProps = {
  avatar?: string;
  time?: string;
  text?: string;
  image?: string;
  isSender?: boolean;
};

const Message: React.FC<MessageProps> = ({
  avatar = 'https://via.placeholder.com/40',
  time = '10:30 AM',
  text = 'Hello!',
  image,
  isSender = false,
}) => {
  return (
    <div className={`flex gap-5 mb-[20px] ${isSender ? 'flex-row-reverse' : ''}`}>
      <div>
        <img src={avatar} alt="User Avatar" className="w-[40px] h-[40px] object-cover rounded-full" />
        <span className="text-[9px] text-gray-400 font-semibold">{time}</span>
      </div>
      <div className={`max-w-[80%] flex flex-col gap-2.5 ${isSender ? 'items-end' : 'items-start'}`}>
        <p className={`text-white px-3.5 py-2.5 rounded-xl ${isSender ? 'bg-[#8da4f1]' : 'bg-gray-500'}`}>
          {text}
        </p>
        {image && <img src={image} alt="Message Attachment" className="w-[50%]" />}
      </div>
    </div>
  );
};

export default Message;
