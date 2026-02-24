'use client' 
import React, { useState } from 'react'

const Chatbot = () => {
    const [message, setMessage] = useState([
        {text:'hello everyone!' , sender : 'user'},
        {text:'nice to meet you' , sender : 'user'}
    ]);
    const [input, setInput] = useState("");
    const sendMessage = () => {
        const newMessage = {text : input,sender:'use'};
        setMessage([...message,newMessage]);
        setInput('');
    }
  return (
    <div className='w-350px h-550px shadow-xl rounded-lg flex flex-col bg-white'>
        <div className='bg-purple-500 text-white flex justify-center px-4 py-3'>
            <h2 className='text-lg font-semibold'>ChatBot</h2>
        </div>
        <div className='flex-1 p-4 overflow-y-auto bg-cover bg-center bg-no-repeat'
        style={{
                backgroundImage: "url(https://t3.ftcdn.net/jpg/17/22/39/96/360_F_1722399617_CZisd8RhP8Hm77t3sNDRxen8JomcZLLM.jpg)"
        }}>
            {message.map((msg,index) => (
                <div key={index}
                className={'mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}'}>
                    <div className={'px-4 py-2 rounded-full max-w-70% text-sm {msg.sender === "user" ? bg-purple-300 text-white : bg-purple-200 text-white-700 shadow}'}>
                        {msg.text}
                    </div>
                </div>
            ))}
        </div>
        <div className='flex items-center border-t p-3'>
            <input type="text" placeholder='Enter Your Message...' className='flex-1 outline-none text-sm' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className=' border text-white bg-purple-500 rounded-full p-3' onClick={sendMessage
        }>Click Me
        </button></div>
    </div>
  );
}

export default Chatbot