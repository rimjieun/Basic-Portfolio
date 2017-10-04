import React, { Component } from 'react';

const Contact = () => (
  <div className='container flex-row contact'>
    <form className='flex-col contact' action='/submit' method='POST'>
      <div className='contact message'>
        <p className='contact'>W A N T&nbsp;&nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;&nbsp;W O R K&nbsp;&nbsp;&nbsp;&nbsp;T O G E T H E R ?</p><br />
        <p className='contact'>L O O K I N G &nbsp;&nbsp;&nbsp;&nbsp;F O R&nbsp;&nbsp;&nbsp;&nbsp;D E V E L O P E R S ?</p><br />
        <p className='contact'>S E N D&nbsp;&nbsp;&nbsp;&nbsp;M E&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;M E S S A G E !</p>
      </div>
      <div className='flex-row form-item'>
        <label htmlFor='name'><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
        <input type='text' name='name' id='name' className='form-item' placeholder='Name'/>
      </div>
      <div className='flex-row form-item'>
        <label htmlFor='email'><i className="fa fa-envelope" aria-hidden="true"></i></label>
        <input type='email' name='email' id='email' className='form-item' placeholder='E-mail' />
      </div>
      <div className='flex-row form-item'>
        <label htmlFor='message'><i className="fa fa-pencil" aria-hidden="true"></i></label>
        <textarea rows='6' name='message' id='message' className='form-item' placeholder='Message'></textarea>
      </div>
      <input type='submit' id='submit' value='S E N D' onSubmit={e => e.preventDefault()}/>
    </form>
    <div className='social-icons'>
      <a className='social-icon flex-row' href='https://github.com/rimjieun' target='_blank'>
        <i className="fa fa-github-alt social-icon" aria-hidden="true"></i>
        <p className='social-icon'>github.com/rimjieun</p>
      </a>
      <a className='social-icon flex-row' href='https://linkedin.com/in/rimjieun' target='_blank'>
        <i className="fa fa-linkedin-square social-icon" aria-hidden="true"></i>
        <p className='social-icon'>linkedin.com/in/rimjieun</p>
      </a>
      <a className='social-icon flex-row' href='https://instagram.com/yakuccino' target='_blank'>
        <i className="fa fa-instagram social-icon" aria-hidden="true"></i>
        <p className='social-icon'>instagram.com/yakuccino</p>
      </a>
    </div>
  </div>
);

export default Contact;