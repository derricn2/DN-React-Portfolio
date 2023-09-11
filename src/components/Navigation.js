import React from 'react';

const Navigation = () => {
    return (
        // nav menu
        <nav>
            <ul>
                <li><a href='/' className='active'>About Me</a></li>
                <li><a href='/portfolio'>Portfolio</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/resume'>Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
