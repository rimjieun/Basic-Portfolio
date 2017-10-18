import React, { Component } from 'react';
import Intro from './Intro';
import Skills from './Skills'

class About extends Component {

  constructor() {
    super();
    this.state = {
      isIntro: true,
      isSkills: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    if (this.state.isIntro) {
      this.setState({
        isIntro: false,
        isSkills: true
      });
    } else {
      this.setState({
        isIntro: true,
        isSkills: false
      });
    }
  }

  render() {
    return (
      <div className='container flex-col content-center'>
        <div className='image-container'>
          <img src='./assets/img/profile-pic.jpg' id='profile-pic' />
        </div>
        <nav className='about-nav'>
          <ul className='about-nav flex-row content-center'>
            <li className={this.state.isIntro ? 'selected about-nav' : 'about-nav'} onClick={this.toggleClass}>I N T R O</li>
            <li className={this.state.isSkills ? 'selected about-nav' : 'about-nav'} onClick={this.toggleClass}>S K I L L S</li>
          </ul>
        </nav>
        <div className='flex-row content-center'>
            {this.state.isIntro ? (
              <Intro />
            ) : (
              <Skills />
            )}
        </div>
      </div>
    );
  }
}

export default About;