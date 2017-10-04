import React, { Component } from 'react';
import ProjectItem from './components/ProjectItem';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  render() {
    return (
      <div className='container flex-col content-center'>
        <h1 className='projects'>P E R S O N A L&nbsp;&nbsp;&nbsp;P R O J E C T S</h1>
        <div className='projects flex-row'>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    );
  }

}

export default Projects;