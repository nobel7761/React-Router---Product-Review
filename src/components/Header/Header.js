import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/" className='nav-link'>HOME</CustomLink>
                        <CustomLink to="/reviews" className='nav-link'>REVIEWS</CustomLink>
                        <CustomLink to="/dashboard" className='nav-link'>DASHBOARD</CustomLink>
                        <CustomLink to="/blogs" className='nav-link'>BLOGS</CustomLink>
                        <CustomLink to="/gallery" className='nav-link'>GALLERY</CustomLink>
                        <CustomLink to="/about" className='nav-link'>ABOUT</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >

    );
};

export default Header;