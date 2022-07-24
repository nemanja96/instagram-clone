import React from 'react'
import Nav from './Nav';
import Avatar from '@mui/material/Avatar';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PortraitIcon from '@mui/icons-material/Portrait';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Profile = () => {

  const [user] = useAuthState(auth);

  const createUsername = () => {
    let emailAddress = user?.email;
    const accountUsername = emailAddress.split("@")[0];
    return accountUsername;
  }

  return (
<div className="bg-[#fafafa] mb-10">
       <Nav />
       <div className='flex justify-center pt-12 sm:pt-24 bg-[#fafafa] min-h-screen'>
        <div className='w-full mt-6 md:mt-0 flex flex-col max-w-3xl'>
          <div className="flex items-center justify-center max-w-3xl w-full">
            <div className="w-4/12 flex justify-center md:justify-start">
              <Avatar src={user?.photoURL} sx={{ width: 80, height: 80 }} className='text-gray-900 md:ml-4'>{user?.email[0].toUpperCase()}</Avatar>
            </div>
            <div className="w-8/12">
              <div className='flex items-center justify-between max-w-[350px]'>
                <h2 className='text-lg sm:text-2xl md:text-3xl font-light text-gray-800'>{createUsername()}</h2>
                {/* <SettingsIcon sx={{ width: 30, height: 30 }} /> */}
              </div>
              <div className='flex gap-8 md:gap-0 md:justify-between items-center max-w-[340px] my-4'>
                <h3 className='flex flex-col md:flex-row justify-center gap-0 md:gap-1 items-center'><span className='font-medium'>0</span><span className='font-medium text-xs sm:text-sm'>posts</span></h3>
                <h3 className='flex flex-col md:flex-row justify-center gap-0 md:gap-1 items-center'><span className='font-medium'>0</span><span className='font-medium text-xs sm:text-sm'>followers</span></h3>
                <h3 className='flex flex-col md:flex-row justify-center gap-0 md:gap-1 items-center'><span className='font-medium'>0</span><span className='font-medium text-xs sm:text-sm'>following</span></h3>
              </div>
              <div>
                <h2 className='hidden sm:inline text-sm md:text-md font-medium'>{user?.displayName || user?.email}</h2>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-300 border-solid mt-10'>
            <div className='flex justify-center gap-4 md:gap-10'>
              <div className='border-t border-black border-solid pt-4 w-[60px] cursor-pointer flex justify-center items-center gap-2'>
                <BorderAllIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>POSTS</span>
              </div>
              <div className='pt-4 w-[60px] cursor-pointer flex justify-center items-center gap-2'>
                <OndemandVideoIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>REELS</span>
              </div>
              <div className='pt-4 w-[60px] cursor-pointer flex justify-center items-center gap-2'>
                <BookmarkBorderIcon sx={{ width: 16, height: 16 }} className='text-[#262626]' />
                <span className='text-sm text-[#262626]'>SAVED</span>
              </div>
              <div className='pt-4 w-[60px] cursor-pointer flex justify-center items-center gap-2'>
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