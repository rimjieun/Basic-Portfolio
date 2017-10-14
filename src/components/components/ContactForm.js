import React, { Component } from 'react';

const ContactForm = props => (
  <form className='flex-col contact' action='/submit' method='POST'>
    <div className='contact message'>
      <p>Want to work on a project together? Send me a message!</p>
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
);

export default ContactForm;