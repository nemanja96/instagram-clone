import React from 'react'
import StoryItem from './StoryItem'
import photo1 from '../assets/01.jpg';
import photo2 from '../assets/02.jpg';
import photo3 from '../assets/03.jpg';
import photo4 from '../assets/04.jpg';
import photo5 from '../assets/05.jpg';
import photo6 from '../assets/06.jpg';
import photo7 from '../assets/07.jpg';

const Stories = () => {
  return (
    <div className='border border-gray-300 border-solid rounded-lg p-4 flex gap-x-4 overflow-x-scroll'>
        <StoryItem photoUrl={photo1} title="rdigital021" />
        <StoryItem photoUrl={photo2} title="rdigital021" />
        <StoryItem photoUrl={photo3} title="rdigital021" />
        <StoryItem photoUrl={photo4} title="rdigital021" />
        <StoryItem photoUrl={photo5} title="rdigital021" />
        <StoryItem photoUrl={photo6} title="rdigital021" />
        <StoryItem photoUrl={photo7} title="rdigital021" />
    </div>
  )
}

export default Stories