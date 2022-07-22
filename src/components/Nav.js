import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Avatar from '@mui/material/Avatar';
import avatar from '../assets/avatar.png';

const Nav = () => {
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
                        <HomeIcon sx={{ width: 28, height: 28 }} className='text-gray-900 hidden' />
                        <MapsUgcOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900' />
                        <ControlPointOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900' />
                        <ExploreOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900' />
                        <FavoriteBorderOutlinedIcon sx={{ width: 28, height: 28 }} className='text-gray-900' />
                    </div>
                    <Link to="/profile"><Avatar src={avatar} sx={{ width: 25, height: 25 }} className='text-gray-900 ml-4' /></Link>
                </div>
            </div>
            <div className="sm:hidden flex justify-between items-center w-full px-4 py-3">
                <CameraAltOutlinedIcon sx={{ width: 30, height: 30 }} className='text-gray-900' />
                <Link to="/"><img src={logo} alt="Instagram" width="105px" /></Link>  
                <Avatar src={avatar} sx={{ width: 30, height: 30 }} className='text-gray-900' />
            </div>
        </div>
  )
}

export default Nav