import React, { Component } from 'react';

const Skills = () => (
  <div className='skills-section flex-col content-center'>
    <span className='skills-title'>
      m e r n
    </span>
    <div className='skills-icons flex-row'>
      <div className='tooltip'>
        <i className="devicon-mongodb-plain skills-icon"></i>
        <span className='tooltiptext'>MongoDB</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-express-original skills-icon"></i>
        <span className='tooltiptext'>ExpressJS</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-react-original skills-icon"></i>
        <span className='tooltiptext'>ReactJS &<br />React Native</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-nodejs-plain skills-icon"></i>
        <span className='tooltiptext'>NodeJS</span>
      </div>
    </div>
    <span className='skills-title'>
      o t h e r
    </span>
    <div className='skills-icons flex-row'>
      <div className='tooltip'>
        <i className="devicon-python-plain skills-icon"></i>
        <span className='tooltiptext'>Python</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-mysql-plain skills-icon"></i>
        <span className='tooltiptext'>MySQL</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-sequelize-plain skills-icon"></i>
        <span className='tooltiptext'>Sequelize</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-jquery-plain skills-icon"></i>
        <span className='tooltiptext'>jQuery</span>
      </div>
    </div>
    <div className='skills-icons flex-row'>
      <div className='tooltip'>
        <i className="devicon-javascript-plain skills-icon"></i>
        <span className='tooltiptext'>JavaScript<br />ES5 & ES6</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-bootstrap-plain skills-icon"></i>
        <span className='tooltiptext'>Bootstrap</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-css3-plain skills-icon"></i>
        <span className='tooltiptext'>CSS3</span>
      </div>
      <div className='tooltip'>
        <i className="devicon-html5-plain skills-icon"></i>
        <span className='tooltiptext'>HTML5</span>
      </div>
    </div>
  </div>
);

export default Skills;