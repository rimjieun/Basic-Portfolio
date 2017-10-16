import React, { Component } from 'react';


const ProjectItem = props => {

  if (props.current) {
    return (
      <div className='current-projects flex-row content-center'>
        <a href={props.githubURL} target='_blank'>
          <div className='project-item flex-row' style={{backgroundImage: `url(${props.imgURL})`, backgroundSize: 'cover'}}>
            <div className='project-layer' style={{backgroundColor: `${props.color}`}}></div>
            <div className='flex-col project-title content-center'>
              {props.useIcon ? (
                <i className={`${props.iconPath} project-icon`} aria-hidden="true"></i>
              ) : (
                <img src={props.iconPath} className='project-icon' />
              )}
              <h1 className='project-title'>
                {props.title}
              </h1>
            </div>
          </div>
        </a>
        <p className='current-project-description'>{props.description}</p>
      </div>
    );
  } else {
    return (
      <div className='flex-col content-center'>
        <a href={props.githubURL} target='_blank'>
          <div className='project-item flex-row' style={{backgroundImage: `url(${props.imgURL})`, backgroundSize: 'cover'}}>
            <div className='project-layer' style={{backgroundColor: `${props.color}`}}></div>
            <div className='flex-col project-title content-center'>
              {props.useIcon ? (
                <i className={`${props.iconPath} project-icon`} aria-hidden="true"></i>
              ) : (
                <img src={props.iconPath} className='project-icon' />
              )}
              <h1 className='project-title'>
                {props.title}
              </h1>
            </div>
          </div>
        </a>
        <p className='project-description'>{props.description}</p>
      </div>
    );
  }
}

export default ProjectItem;