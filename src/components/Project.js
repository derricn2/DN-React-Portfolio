import React from 'react';
import foodiefaves from '../assets/foodiefaves.png';
import textflow from '../assets/J-A-T-E.png';
import notetaker from '../assets/Note-Taker.png';

const Project = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-white bg-[#257B9C]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#FF914D]">
            Work
          </p>
          <p className="py-4">Explore my latest projects</p>
        </div>
        {/* arranges all project cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* each project card */}
          <div
            style={{ backgroundImage: `url(${foodiefaves})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Interactive Full-Stack Application
              </span>
              <div className="pt-4 text-center">
                <a href="https://foodiefaves-7df0459211a7.herokuapp.com/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/FoodieFaves">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${textflow})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Progressive Web Application
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${foodiefaves})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Interactive Full-Stack Application
              </span>
              <div className="pt-4 text-center">
                <a href="https://foodiefaves-7df0459211a7.herokuapp.com/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/FoodieFaves">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${textflow})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Progressive Web Application
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${foodiefaves})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Interactive Full-Stack Application
              </span>
              <div className="pt-4 text-center">
                <a href="https://foodiefaves-7df0459211a7.herokuapp.com/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/FoodieFaves">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${textflow})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Progressive Web Application
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
