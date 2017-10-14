import React, { Component } from 'react';

const SocialIcon = props => (
  <a className='social-icon flex-row' href={props.url} target='_blank'>
    <i className={`${props.classes} social-icon`} aria-hidden="true"></i>
    <p className='social-icon'>{props.label}</p>
  </a>
)

export default SocialIcon;