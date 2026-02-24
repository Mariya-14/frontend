'use client';
import React, { useState } from 'react'

const Todolist = () => {
    //let count = 1;
    const [count, setCount] = useState(1);
  return (
    <div>
       <h1 className='text-3xl font-bold'>{count}</h1>
       <button className='border p-3' onClick={() => {
        setCount(count + 1); 
        console.log(count);
        }}>Click Me
        </button>
    </div>
  )
}

export default Todolist;