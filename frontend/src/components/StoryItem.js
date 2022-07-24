import React from 'react'
import Avatar from '@mui/material/Avatar';

const StoryItem = ({ photoUrl, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
        <div className='p-[2px] rounded-full' id="avatar">
          <Avatar src={photoUrl} sx={{ width: 60, height: 60 }} className='text-gray-900 border-2 border-white border-solid' />
        </div>
        <h3 className="text-xs mt-1 text-gray-800">{title}</h3>
    </div>
  )
}

export default StoryItem