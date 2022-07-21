import React from 'react'
import StoryItem from './StoryItem'
import photo1 from '../assets/stories/01.jpg';
import photo2 from '../assets/stories/02.jpg';
import photo3 from '../assets/stories/03.jpg';
import photo4 from '../assets/stories/04.jpg';
import photo5 from '../assets/stories/05.jpg';
import photo6 from '../assets/stories/06.jpg';
import photo7 from '../assets/stories/07.jpg';
import photo8 from '../assets/stories/08.jpg';
import photo9 from '../assets/stories/09.jpg';
import photo10 from '../assets/stories/10.jpg';
import photo11 from '../assets/stories/11.jpg';
import photo12 from '../assets/stories/12.jpg';
import photo13 from '../assets/stories/13.jpg';
import photo14 from '../assets/stories/14.jpg';
import photo15 from '../assets/stories/15.jpg';

const Stories = () => {
  return (
    <div className='border border-gray-300 border-solid rounded-lg p-4 flex gap-x-3 bg-white overflow-x-scroll'>
        <StoryItem photoUrl={photo1} title="reactjs1" />
        <StoryItem photoUrl={photo2} title="dielenka" />
        <StoryItem photoUrl={photo3} title="laguna_knjige" />
        <StoryItem photoUrl={photo4} title="mydesign.aa" />
        <StoryItem photoUrl={photo5} title="david.webdev" />
        <StoryItem photoUrl={photo6} title="tubikstudio" />
        <StoryItem photoUrl={photo7} title="rdigital021" />
        <StoryItem photoUrl={photo8} title="alobratmoi" />
        <StoryItem photoUrl={photo9} title="natasa.dizajn" />
        <StoryItem photoUrl={photo10} title="username" />
        <StoryItem photoUrl={photo11} title="username" />
        <StoryItem photoUrl={photo12} title="username" />
        <StoryItem photoUrl={photo13} title="username" />
        <StoryItem photoUrl={photo14} title="username" />
        <StoryItem photoUrl={photo15} title="username" />
    </div>
  )
}

export default Stories