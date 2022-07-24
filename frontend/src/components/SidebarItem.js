import React from 'react'
import Avatar from '@mui/material/Avatar';

const SidebarItem = ({ sidebarPhotoUrl, sidebarUsername }) => {
  return (
    <div className='flex items-center mt-3 max-w-[300px]'>
        <Avatar src={sidebarPhotoUrl} sx={{ width: 32, height: 32 }} />
        <div className='ml-3 flex flex-col flex-grow'>
            <h3 className='text-[#262626] text-sm font-semibold'>{sidebarUsername}</h3>
            <h4 className='text-gray-400 text-xs font-normal'>New to Instagram</h4>
        </div>
        <span className='text-xs font-medium text-blue-500'>Follow</span>
    </div>
  )
}

export default SidebarItem