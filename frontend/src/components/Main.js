import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Post from './Post';
import Stories from './Stories';
import Sidebar from './Sidebar';
import axios from 'axios';

const Main = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://dry-wave-86307.herokuapp.com/instagram/posts');
        const videosData = res.data;
        setVideos(videosData);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [])

  return (
    <div className="bg-[#fafafa] mb-10">
       <Nav />
       <div className='flex justify-center pt-12 sm:pt-20 bg-[#fafafa]'>
        <div className="flex justify-center w-full max-w-4xl items-stretch gap-8">
          <div className="w-full sm:w-9/12 lg:w-7/12">
            <Stories />
            <div>
              {
                videos.map(({ _id, avatarUrl, photoUrl, postDescription, postLikes, publishTime, username }) => (
                  <Post key={_id} avatarUrl={avatarUrl} username={username} postImgUrl={photoUrl} postLikes={postLikes} postDescription={postDescription} postTime={publishTime} />
                ))
              }
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