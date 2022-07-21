import React from 'react'
import Nav from './Nav';
import Stories from './Stories';

const Main = () => {
  return (
    <div className="bg-[#fafafa]">
       <Nav />
       <div className='flex justify-center mt-20 bg-[#fafafa]'>
        <div className="flex w-full max-w-4xl items-stretch gap-6">
          <div className="w-7/12">
            <Stories />
          </div>
          <div className="w-5/12"></div>
        </div>
       </div>

    </div>
  )
}

export default Main