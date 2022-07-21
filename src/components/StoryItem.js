import React from 'react'
import Avatar from '@mui/material/Avatar';

const StoryItem = ({ photoUrl, title }) => {
  return (
    <div className="flex flex-col items-center">
        <Avatar src={photoUrl} sx={{ width: 66, height: 66 }} className='text-gray-900 border-2 border-red-500 border-solid outline-2 outline-blue-500 outline-offset-2' />
        <h3 className="text-xs mt-1 text-gray-800">{title}</h3>
    </div>
  )
}

export default StoryItem