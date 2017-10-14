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
          githubURL: 'https://github.com/rimjieun/Meet-Point',
          color: 'rgba(153, 102, 0, 0.8)',
          current: false,
          description: 'MeetPoint uses the Yelp search engine to find meeting locations conveniently located from all parties of a group.'
        },
        {
          id: 2,
          title: 'SignatureFD Paperwork',
          imgURL: './assets/img/signaturefd.jpeg',
          githubURL: 'https://github.com/rimjieun/SignatureFDPaperWork',
          color: 'rgba(25, 25, 77, 0.8)',
          current: false,
          description: 'SignatureFD Paperwork was developed to streamline the onboarding process of new employees at SignatureFD, a financial planning company.'
        },
        {
          id: 3,
          title: 'Braves Concessions',
          imgURL: './assets/img/braves.jpeg',
          githubURL: 'https://github.com/rimjieun/bravesapp',
          color: 'rgba(128, 0, 0, 0.8)',
          current: false,
          description: 'Braves Concessions is a mobile app born from the Atlanta Braves Hackathon at SunTrust Park. It allows baseball fans to put in mobile orders and pick up food from the nearest concession stand.'
        },
        {
          id: 4,
          title: 'DeKalb County Jail Scraper',
          imgURL: './assets/img/bail.jpeg',
          githubURL: 'https://github.com/rimjieun/aclu-bail-reform/tree/master/src/webscraper/dekalb',
          color: 'rgba(0, 51, 0, 0.8)',
          current: true,
          description: 'DeKalb County Jail Scraper is a Python-based web scraper that allows you to scrape DeKalb County jail records. The purpose of this project is to help build a case for the ACLU Bail Reform Project in the state of Georgia. Currently the scope of the project covers 16 different counties, DeKalb County being one of them. The scraper can output CSV files for current day, custom date, and all jail records.'
        }
      ]
    };
  }

  render() {
    return (
      <div className='flex-col container projects'>
        <h1 className='projects'>I'm currently working on . . .</h1>
        <div className='current flex-col'>
          {this.state.projects.map(project => {
            if (project.current === true) {
              return <ProjectItem key={project.id} imgURL={project.imgURL} githubURL={project.githubURL} color={project.color} title={project.title} description={project.description} current={project.current} />
            }
          })}
        </div>
        <h1 className='projects'>Check out my past projects . . .</h1>
        <div className='not-current flex-row'>
          {this.state.projects.map(project => {
            if (project.current === false) {
              return <ProjectItem key={project.id} imgURL={project.imgURL} githubURL={project.githubURL} color={project.color} title={project.title} description={project.description} current={project.current} />
            }
          })}
        </div>
      </div>
    );
  }

}

export default Projects;