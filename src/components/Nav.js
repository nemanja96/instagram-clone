import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Avatar from '@mui/material/Avatar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Nav = () => {

    const [user] = useAuthState(auth);

  return (
        <div className='border-b border-gray-200 border-solid flex justify-center fixed bg-white top-0 left-0 right-0 z-50'>
            <div className="hidden max-w-4xl w-full sm:flex justify-between md:grid md:grid-cols-3 py-3 px-4 items-center">
                <Link to="/"><img src={logo} alt="Instagram" width="110px" /></Link>
                <div className='hidden bg-gray-100 p-2 rounded-lg min-w-[200px] max-w-[250px] max-h-[35px] sm:flex justify-center items-center gap-2'>
                    <SearchIcon sx={{ width: 22, height: 22 }} className='text-gray-400' />
                    <input placeholder='Search' className='bg-gray-100' />
                </div>
                <div className='flex justify-end'>
                    <div className='sm:flex gap-4 justify-center items-center hidden'>
                        <Link to="/"><HomeIcon sx={{ width: 28, height: 28 }} className='text-gray-900 cursor-pointer' /></Link>
                        <MapsUgcOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900 cursor-pointer' />
                        <ControlPointOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900 cursor-pointer' />
                        <ExploreOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900 cursor-pointer' />
                        <LogoutOutlinedIcon onClick={() => signOut(auth)} sx={{ width: 28, height: 28 }} className='text-gray-900 cursor-pointer' />
                    </div>
                    <Link to="/profile"><Avatar src={user?.photoURL} sx={{ width: 25, height: 25 }} className='text-gray-900 ml-4'>{user?.email[0].toUpperCase()}</Avatar></Link>
                </div>
            </div>
            <div className="sm:hidden flex justify-between items-center w-full px-4 py-3">
                <CameraAltOutlinedIcon sx={{ width: 30, height: 30 }} className='text-gray-900' />
                <Link to="/"><img src={logo} alt="Instagram" width="105px" /></Link> 
                <div className='flex gap-1'>
                    <LogoutOutlinedIcon onClick={() => signOut(auth)} sx={{ width: 28, height: 28 }} className='text-gray-900 cursor-pointer' /> 
                    <Link to="/profile"><Avatar src={user?.photoURL} sx={{ width: 30, height: 30 }} className='text-gray-900'>{user?.email[0].toUpperCase()}</Avatar></Link>
                </div>
            </div>
        </div>
  )
}

export default Nav