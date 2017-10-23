import React, { Component } from 'react';

const Intro = () => (
  <div className='intro flex-row container'>
    <div className='intro-border-left-top'></div>
    <div className='intro-border-left-side'></div>
    <p className='intro intro-1'>
      I am a <span className='bold'>full-stack developer</span> well-versed in web development. I have extensive experience in the full <span className='bold'>MERN</span> stack. I have experience in mobile development using <span className='bold'>React Native</span> and in back-end development using <span className='bold'>Python</span>. And I also <span className='bold'>teach others</span> how to code on the side!
    </p>
    <p className='intro intro-2'>
      I love <span className='bold'>learning new languages</span>, both human and computer. I love <span className='bold'>attending hackathons</span> and meeting new people
      to collaborate with on projects. I believe technology to be a means to an end,
      and hope that my efforts can <span className='bold'>help make the world a better place</span>.
    </p>
    <div className='intro-border-right-side'></div>
    <div className='intro-border-right-bottom'></div>
  </div>
);

export default Intro;