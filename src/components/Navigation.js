import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/DNlogo.png'

const Navigation = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        // nav menu
        <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#257B9C] text-white'>
            {/* DN logo */}
            <div>
                <img src={Logo} alt="Logo image" style={{width: '90px'}} />
            </div>

            {/* Navbar selection */}
            <ul className='hidden md:flex'>
                <li><a href='/' className='active'>About Me</a></li>
                <li><a href='/portfolio'>Portfolio</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/resume'>Resume</a></li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes /> }
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#257B9C] flex flex-col justify-center items-center'}>
                <li className='py-5 text-3xl'><a href='/' className='active'>About Me</a></li>
                <li className='py-5 text-3xl'><a href='/portfolio'>Portfolio</a></li>
                <li className='py-5 text-3xl'><a href='/contact'>Contact</a></li>
                <li className='py-5 text-3xl'><a href='/resume'>Resume</a></li>
            </ul>

            {/* social icons */}
            <div className='hidden'></div>
        </div>
    );
};

export default Navigation;
