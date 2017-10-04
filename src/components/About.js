import React, { Component } from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills'

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
      <div className='container'>
        <div className='image-container'>
          <img src='./assets/img/profile-pic.jpg' id='profile-pic' />
        </div>
        <nav className='about-nav'>
          <ul className='about-nav flex-row content-center'>
            <li className='about-nav' onClick={() => this.setSection("intro")}>I N T R O</li>
            <li className='about-nav' onClick={() => this.setSection("skills")}>S K I L L S</li>
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