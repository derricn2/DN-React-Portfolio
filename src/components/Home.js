import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div className='w-full h-screen bg-[#257B9C]'>

            {/* container */}
            <div className="max-w-[1080] mx-auto px-16 flex flex-col justify-center h-full">
                <p className='text-[#FF914D]'> Hi, my name is</p>
                <h1 className="text-3xl sm:text-6xl font-bold text-white">Derric Nguyen</h1>
                <h2 className="text-3xl sm:text-6xl font-bold text-[#E1D9D1]">I am a full-stack developer.</h2>
                <p className="text-[#E1D9D1]">Welcome to my portfolio! I am Derric Nguyen, a passionate full-stack developer with a knack for turning ideas into digital solutions. With a strong foundation in both front-end and back-end development, I bring creativity and technical expertise to every project.</p>

                <div>
                    <button className="text-white border-2 px-4 py-2 my-2 flex items-center hover:bg-[#FF914D] hover:border-[#FF914D]">View Projects
                        <span>
                          <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;