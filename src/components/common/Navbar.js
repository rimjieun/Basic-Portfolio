import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  <nav>
    <h1 id='logo'>Jieun Rim</h1>
    <ul>
      <Link to='/'>ABOUT</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
    </ul>
  </nav>
}

export default Navbar;