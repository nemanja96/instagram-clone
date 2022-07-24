import React from 'react'
import instagram from '../assets/instagram.png';
import meta from '../assets/from-meta.PNG';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center h-screen'>
        <div className='flex justify-center items-center flex-grow'>
            <div>
                <img src={instagram} alt="Instagram" width="70px" height="70px" />
            </div>
        </div>
        <div className='flex flex-col items-center mb-10'>
            <span className='text-gray-400 font-normal mb-2'>from</span>
            <img src={meta} alt="Meta" width="70px" />
        </div>
    </div>
  )
}

export default Loading