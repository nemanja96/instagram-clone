import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Post = ({ avatarUrl, username, postImgUrl, postLikes, postDescription, postTime }) => {
  return (
    <div className='border border-gray-300 border-solid rounded-lg mt-4 bg-white'>
        <div className='flex items-center justify-between p-3'>
            <div className='flex items-center gap-3'>
                <Avatar src={avatarUrl} sx={{ width: 33, height: 33 }} />
                <div>
                    <h3 className='text-[#262626] text-sm font-semibold'>{username}</h3>
                </div>
            </div>
            <MoreHorizIcon />
        </div>
        <img src={postImgUrl} alt="Post" />
        <div className='px-3 py-2 flex justify-between'>
            <div className='flex gap-4'>
                <FavoriteBorderIcon className='text-gray-800' sx={{ width: 30, height: 30 }} />
                <ChatBubbleOutlineIcon className='text-gray-800' sx={{ width: 30, height: 30 }} />
                <SendOutlinedIcon className='text-gray-800' sx={{ width: 30, height: 30 }} />
            </div>
            <BookmarkBorderIcon className='text-gray-800' sx={{ width: 30, height: 30 }} />
        </div>
        <div className='px-3 py-2'>
            <h5 className='text-sm font-semibold text-[#262626]'>{postLikes}</h5>
            <p className='mt-1 mb-2'>
                <span className='text-sm font-semibold text-[#262626]'>{username}</span>
                <span className='text-sm font-normal text-[#262626] ml-1'>{postDescription}</span>
            </p>
            <h5 className='text-[#8e8e8e] text-xs font-light'>{postTime}</h5>
        </div>
        <div className='px-3 py-3 border-t border-gray-200 border-solid w-full flex items-center gap-2'>
            <SentimentSatisfiedAltIcon sx={{ width: 28, height: 28 }} className='text-gray-800' />
            <input placeholder='Add a comment...' className='flex-grow' />
            <button className='bg-white text-blue-500 font-semibold'>Post</button>
        </div>
    </div>
  )
}

export default Post