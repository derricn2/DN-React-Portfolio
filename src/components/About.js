import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#257B9C] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF914D]">
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className='sm:text-right text-4xl font-bold'>
              <p>Welcome! I'm Derric, please take a peek around.</p>
            </div>
            <div>
                <p>
                    My journey in web development has allowed me to work on diverse projects, from building responsive and user-friendly web applications to crafting robust server-side logic. I thrive on challenges and am always eager to learn and adapt to the latest technologies.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
