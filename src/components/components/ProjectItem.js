import React, { Component } from 'react';


const ProjectItem = props => {

  if (props.current) {
    return (
      <div className='current-projects flex-row content-center'>
        <a href={props.githubURL} target='_blank'>
          <div className='project-item flex-row content-center' style={{backgroundImage: `url(${props.imgURL})`, backgroundSize: 'cover'}}>
            <div className='project-layer' style={{backgroundColor: `${props.color}`}}></div>
            <h1 className='project-title'>
              {props.title}
            </h1>
          </div>
        </a>
        <p className='current-project-description'>{props.description}</p>
      </div>
    );
  } else {
    return (
      <div className='flex-col content-center'>
        <a href={props.githubURL} target='_blank'>
          <div className='project-item flex-row content-center' style={{backgroundImage: `url(${props.imgURL})`, backgroundSize: 'cover'}}>
            <div className='project-layer' style={{backgroundColor: `${props.color}`}}></div>
            <h1 className='project-title'>
              {props.title}
            </h1>
          </div>
        </a>
        <p className='project-description'>{props.description}</p>
      </div>
    );
  }
}

export default ProjectItem;