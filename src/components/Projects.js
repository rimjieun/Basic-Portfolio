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
          color: 'rgba(204, 153, 0, 0.6)',
          ongoing: false,
          description: 'MeetPoint uses the Yelp search engine to find meeting locations conveniently located from all parties of a group.'
        },
        {
          id: 2,
          title: 'SignatureFD Paperwork',
          imgURL: './assets/img/signaturefd.jpeg',
          color: 'rgba(0, 51, 153, 0.6)',
          ongoing: false,
          description: 'SignatureFD Paperwork was developed to streamline the onboarding process of new employees at SignatureFD, a financial planning company.'
        },
        {
          id: 3,
          title: 'Braves Concessions',
          imgURL: './assets/img/braves.jpeg',
          color: 'rgba(128, 0, 0, 0.6)',
          ongoing: false,
          description: 'Hello'
        },
        {
          id: 4,
          title: 'Dekalb Jail Scraper',
          imgURL: './assets/img/bail.jpeg',
          color: 'rgba(51, 102, 0, 0.6)',
          ongoing: true,
          description: 'Hello'
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
                return <ProjectItem key={project.id} imgURL={project.imgURL} color={project.color} title={project.title} description={project.description} />
              }
            })}
          </div>
        </div>
        <div className='ongoing-container flex-col content-center'>
          <h1 className='ongoing projects'>Here are some projects I'm currently working on with other developers...</h1>
          <div className='ongoing projects flex-col'>
            {this.state.projects.map(project => {
              if (project.ongoing === true) {
                return <ProjectItem key={project.id} imgURL={project.imgURL} color={project.color} title={project.title} description={project.description} />
              }
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default Projects;