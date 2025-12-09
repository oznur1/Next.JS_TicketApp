import { Loader } from 'lucide-react'
import React from 'react'
import { FC } from 'react'



const Loading:FC= () => {
  return (
    <div className='my-40 flex justify-center items-center'>
      <Loader className='text-blue-500 size-7 animate-spin'/>
    </div>
  )
}

export default Loading
