import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            {/* <nav className='nav'>
                <Link to='/'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/hello'>hello</Link>
            </nav> */}
        </div>
    );
};

export default Header;