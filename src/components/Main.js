import React from 'react'
import Nav from './Nav';
import Post from './Post';
import Stories from './Stories';
import photo from '../assets/post-photo.jpg';
import avatar from '../assets/avatar.png';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div className="bg-[#fafafa] mb-10">
       <Nav />
       <div className='flex justify-center pt-12 sm:pt-20 bg-[#fafafa]'>
        <div className="flex justify-center w-full max-w-4xl items-stretch gap-8">
          <div className="w-full sm:w-9/12 lg:w-7/12">
            <Stories />
            <div>
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
              <Post avatarUrl={avatar} username="nemanjaradivojevic" postImgUrl={photo} postLikes="105 svidjanja" postDescription="Ovo je opis videa." postTime="PRE 15 SATI" />
            </div>
          </div>
          <div className="hidden lg:w-5/12 lg:block">
            <Sidebar />
          </div>
        </div>
       </div>

    </div>
  )
}

export default Main