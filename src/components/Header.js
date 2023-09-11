import React from 'react';

const Header = () => {
    return (
        // header element for website header section
        <header>
            <h1>Derric Nguyen</h1>
            <nav>
                <ul>
                    <li><a href='/'>About Me</a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href='/resume'>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;