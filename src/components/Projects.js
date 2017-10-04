import React, { Component } from 'react';
import ProjectItem from './components/ProjectItem';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          title: 'MeetPoint',
          imgURL: './assets/img/meetpoint.jpg',
          color: 'rgba(255, 165, 0, 0.7)'
        },
        {
          id: 2,
          title: 'SignatureFD',
          imgURL: './assets/img/signaturefd.jpeg',
          color: 'rgba(0, 0, 153, 0.7)'
        },
        {
          id: 3,
          title: 'Smart3DATL',
          imgURL: './assets/img/marta.jpg',
          color: 'rgba(0, 102, 0, 0.7)'
        },
        {
          id: 4,
          title: 'Braves Concessions',
          imgURL: './assets/img/braves.jpeg',
          color: 'rgba(153, 0, 0, 0.7)'
        }
      ]
    };
  }

  render() {
    return (
      <div className='container flex-col content-center'>
        <h1 className='projects'>Check out past projects I've worked on solo and as a group!</h1>
        <div className='projects flex-row'>
          {this.state.projects.map(project => 
            <ProjectItem imgURL={project.imgURL} color={project.color} title={project.title} />  
          )}
        </div>
      </div>
    );
  }

}

export default Projects;