import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Intro from './components/Intro';
import Skills from './components/Skills'

const About = props => (
  <div className='container'>
    <div className='image-container'>
      <img src='./assets/img/profile-pic.jpg' id='profile-pic' />
    </div>
    <nav className='about-nav'>
      <ul>
        <Link to='/intro'>Intro</Link>
        <Link to='/skills'>Skills</Link>
      </ul>
    </nav>
    <div>
      <Intro />
    </div>
  </div>
);

export default About;