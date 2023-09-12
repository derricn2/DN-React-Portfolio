import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#257B9C] text-white">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-fold inline border-b-4 border-[#FF914D]">
            Experience
          </p>
          <p className="py-4">
            Here's a list of technologies I'm experienced with.
          </p>
        </div>
        {/* each logo */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6'>
          <div className='shadow-md shadow-[#FFA167] hover:scale-105 duration-400'>
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#FFA167] hover:scale-105 duration-400'>
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#FFA167] hover:scale-105 duration-400'>
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#FFA167] hover:scale-105 duration-400'>
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#FFA167] hover:scale-105 duration-400'>
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#FFA167] hover:scale-105 duration-400'>
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className='my-4'>Mongo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
