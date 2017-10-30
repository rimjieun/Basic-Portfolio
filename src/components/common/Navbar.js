import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='main-nav'>
    <div className='container flex-row'>
      <div className='inline logo'>
        <div id='title' className='inline'>J I E U N&nbsp;&nbsp;R I M</div>
        <div id='subtitle'>F U L L&nbsp;&nbsp;&nbsp;S T A C K&nbsp;&nbsp;&nbsp;D E V E L O P E R</div>
      </div>
      <ul className='inline flex-row'>
        <Link to='/' className='nav-btn'>About</Link>
        <Link to='/projects' className='nav-btn'>Projects</Link>
        <Link to='/contact' className='nav-btn'>Contact</Link>

      </ul>
      <a href='#' className='collapse-icon'>&#9776;</a>
    </div>
  </nav>
);


export default Navbar;