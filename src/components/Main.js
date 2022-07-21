import React from 'react'
import Nav from './Nav';
import Post from './Post';
import Stories from './Stories';
import photo from '../assets/post-photo.jpg';
import avatar from '../assets/avatar.png';

const Main = () => {
  return (
    <div className="bg-[#fafafa] mb-10">
       <Nav />
       <div className='flex justify-center mt-20 bg-[#fafafa]'>
        <div className="flex w-full max-w-4xl items-stretch gap-6">
          <div className="w-7/12">
            <Stories />
            <div>
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
            </div>
          </div>
          <div className="w-5/12"></div>
        </div>
       </div>

    </div>
  )
}

export default Main