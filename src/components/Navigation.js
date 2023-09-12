import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/DNlogo.png';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    // nav menu
    <div className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#257B9C] text-white">
      {/* DN logo */}
      <div>
        <img src={Logo} alt="Logo image" style={{ width: '90px' }} />
      </div>

      {/* Navbar selection */}
      <ul className="hidden md:flex">
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#257B9C] flex flex-col justify-center items-center'
        }
      >
        <li className="py-5 text-3xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About Me
            </Link>
        </li>
        <li className="py-5 text-3xl">
            <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
              Experience
            </Link>
        </li>
        <li className="py-5 text-3xl">
            <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
        </li>
        <li className="py-5 text-3xl">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
        </li>
        <li className="py-5 text-3xl">
          <a href="/resume">Resume</a>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[25%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-200 bg-[#0A66C2]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-200 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-200 bg-[#FF914D]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              Contact Me <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-200 bg-[gray]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
