import MyButton from '@/components/MyButton'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1 className='text-4xl'>Signup Page</h1>
        <MyButton dis={true}>Submit</MyButton>
        <MyButton>Click Me</MyButton>
        <MyButton>Yes</MyButton>


    </div>
  )
}

export default Signup