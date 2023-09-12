import React from 'react';
import foodiefaves from '../assets/foodiefaves.png';
import textflow from '../assets/J-A-T-E.png';
import notetaker from '../assets/Note-Taker.png';
import weatherguesser from '../assets/WeatherGuesser.png';
import DCJLproject from '../assets/DCJL-Project-1.png';
import timedjsquiz from '../assets/DN-s-Timed-JS-Coding-Quiz.png';

const Project = () => {
  return (
    <div name="portfolio" className="w-full md:h-screen text-white bg-[#257B9C]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#FF914D]">
            Portfolio
          </p>
          <p className="py-4">Explore my latest projects</p>
        </div>
        {/* arranges all project cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* each project card */}
          {/* foodie faves project */}
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
          {/* PWA text editor */}
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
                <a href="https://textflow-pwa-a9d55522e4e4.herokuapp.com/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/TextFlow-PWA">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* note taker */}
          <div
            style={{ backgroundImage: `url(${notetaker})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Express.Js Note Taker
              </span>
              <div className="pt-4 text-center">
                <a href="https://sleepy-stream-54754-bba5c5611641.herokuapp.com/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/NoteCraft">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* weather guesser */}
          <div
            style={{ backgroundImage: `url(${weatherguesser})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Server-side APIs Weather Dashboard
              </span>
              <div className="pt-4 text-center">
                <a href="https://derricn2.github.io/WeatherGuesser/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/WeatherGuesser">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* interactive front-end application */}
          <div
            style={{ backgroundImage: `url(${DCJLproject})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Interactive front-end application
              </span>
              <div className="pt-4 text-center">
                <a href="https://derricn2.github.io/DCJL-Project-1/">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/DCJL-Project-1">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* cute JS Coding quiz */}
          <div
            style={{ backgroundImage: `url(${timedjsquiz})` }}
            className="shadow-lg shadow-[#FF914D] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Web APIs: Timed JS Quiz
              </span>
              <div className="pt-4 text-center">
                <a href="https://derricn2.github.io/JavaScript-Timed-Quiz/index.html">
                  <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-500 font-bold text-lg">
                    Deployed
                  </button>
                </a>
                <a href="https://github.com/derricn2/JavaScript-Timed-Quiz">
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
