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
          color: 'rgba(255, 165, 0, 0.6)',
          ongoing: false
        },
        {
          id: 2,
          title: 'SignatureFD',
          imgURL: './assets/img/signaturefd.jpeg',
          color: 'rgba(0, 0, 0, 0.5)',
          ongoing: false
        },
        {
          id: 3,
          title: 'Smart3DATL',
          imgURL: './assets/img/marta.jpg',
          color: 'rgba(0, 102, 0, 0.6)',
          ongoing: false
        },
        {
          id: 4,
          title: 'Braves Concessions',
          imgURL: './assets/img/braves.jpeg',
          color: 'rgba(153, 0, 0, 0.6)',
          ongoing: false
        },
        {
          id: 5,
          title: 'BootCruit',
          imgURL: './assets/img/bootcruit.jpg',
          color: 'rgba(0, 34, 102, 0.6)',
          ongoing: true
        },
        {
          id: 6,
          title: 'Roster Scraper',
          imgURL: './assets/img/bail.jpeg',
          color: 'rgba(102, 0, 102, 0.6)',
          ongoing: true
        }
      ]
    };
  }

  render() {
    return (
      <div className='container projects-container flex-row content-center'>
        <div className='not-ongoing-container flex-col content-center'>
          <h1 className='not-ongoing projects'>Check out past projects I've worked on solo and as a group!</h1>
          <div className='not-ongoing projects flex-row'>
            {this.state.projects.map(project => {
              if (project.ongoing === false) {
                return <ProjectItem key={project.id} imgURL={project.imgURL} color={project.color} title={project.title} />
              }
            })}
          </div>
        </div>
        <div className='ongoing-container flex-col content-center'>
          <h1 className='ongoing projects'>Here are some projects I'm currently working on with other developers...</h1>
          <div className='ongoing projects flex-col'>
            {this.state.projects.map(project => {
              if (project.ongoing === true) {
                return <ProjectItem key={project.id} imgURL={project.imgURL} color={project.color} title={project.title} />
              }
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default Projects;