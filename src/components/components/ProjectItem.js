import React, { Component } from 'react';


const ProjectItem = props => (
  <div className='flex-col content-center'>
    <div className='project-item flex-row content-center'
      style={{
        backgroundImage: `url(${props.imgURL})`,
        backgroundSize: 'cover'}}>
      <div className='project-layer'
        style={{
          backgroundColor: `${props.color}`
      }}></div>
      <h1 className='project-title'>
        {props.title}
      </h1>
    </div>
    <p className='project-description'>{props.description}</p>
  </div>
);

export default ProjectItem;