import React, { Component } from 'react';
import Intro from './Intro';
import Skills from './Skills'

class About extends Component {

  constructor() {
    super();
    this.state = {
      isIntro: true
    };
    this.setSection = this.setSection.bind(this);
  }

  setSection(sectionName) {
    if (sectionName === "intro") {
      this.setState({isIntro: true});
    } else {
      this.setState({isIntro: false});
    }
  }



  render() {
    return (
      <div className='container flex-col content-center'>
        <div className='image-container'>
          <img src='./assets/img/profile-pic.jpg' id='profile-pic' />
        </div>
        <nav className='about-nav'>
            {this.state.isIntro ? (
              <ul className='about-nav flex-row content-center'>
                <li className='about-nav selected' onClick={() => this.setSection("intro")}>I N T R O</li>
                <li className='about-nav' onClick={() => this.setSection("skills")}>S K I L L S</li>
              </ul>
            ) : (
              <ul className='about-nav flex-row content-center'>
                <li className='about-nav' onClick={() => this.setSection("intro")}>I N T R O</li>
                <li className='about-nav selected' onClick={() => this.setSection("skills")}>S K I L L S</li>
              </ul>
            )}
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