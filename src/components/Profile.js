import React from 'react'
import Nav from './Nav';
import Avatar from '@mui/material/Avatar';
import avatar from '../assets/avatar.png';
import SettingsIcon from '@mui/icons-material/Settings';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PortraitIcon from '@mui/icons-material/Portrait';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const Profile = () => {
  return (
<div className="bg-[#fafafa] mb-10">
       <Nav />
       <div className='flex justify-center pt-12 sm:pt-24 bg-[#fafafa] min-h-screen'>
        <div className='w-full flex flex-col max-w-3xl'>
          <div className="flex justify-center max-w-3xl w-full">
            <div className="w-4/12">
              <Avatar src={avatar} sx={{ width: 150, height: 150 }} className='text-gray-900 ml-4' />
            </div>
            <div className="w-8/12">
              <div className='flex items-center justify-between max-w-[350px]'>
                <h2 className='text-3xl font-light text-gray-800'>nemanjaradivojevic</h2>
                <SettingsIcon sx={{ width: 30, height: 30 }} />
              </div>
              <div className='flex justify-between items-center max-w-[340px] my-4'>
                <h3 className='flex gap-1 items-center'><span className='font-medium'>43</span><span>posts</span></h3>
                <h3 className='flex gap-1 items-center'><span className='font-medium'>277</span><span>followers</span></h3>
                <h3 className='flex gap-1 items-center'><span className='font-medium'>627</span><span>following</span></h3>
              </div>
              <div>
                <h2 className='text-md font-medium'>Nemanja Radivojevic</h2>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-300 border-solid mt-10'>
            <div className='flex justify-center gap-10'>
              <div className='border-t border-black border-solid pt-4 w-[60px] flex justify-center items-center gap-2'>
                <BorderAllIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>POSTS</span>
              </div>
              <div className='border-t border-solid pt-4 w-[60px] flex justify-center items-center gap-2'>
                <OndemandVideoIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>REELS</span>
              </div>
              <div className='border-t border-solid pt-4 w-[60px] flex justify-center items-center gap-2'>
                <BookmarkBorderIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>SAVED</span>
              </div>
              <div className='border-t border-solid pt-4 w-[60px] flex justify-center items-center gap-2'>
                <PortraitIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>TAGGED</span>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-col items-center mt-20'>
              <CameraAltOutlinedIcon sx={{ width: 70, height: 70 }} className='border-2 border-[#262626] border-solid rounded-full p-4 text-[#262626]' />
              <h3 className='text-2xl text-[#262626] mt-4'>No Posts Yet</h3>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Profile