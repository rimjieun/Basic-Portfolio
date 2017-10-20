import React, { Component } from 'react';

const ContactForm = props => (
  <form className='flex-col contact' id='contact-form' action='/send' method='POST'>
    <h1 className='contact'>Want to work on a project together?<br />Send me a message!</h1>
    <p className='form-response'></p>
    <div className='form-item flex-row'>
      <input type='text' name='name' id='name' className='form-item' placeholder='Name *' required />
      <label htmlFor='name' className='form-item'>
        <i className='fa fa-user-circle-o contact' aria-hidden="true"></i>
      </label>
    </div>
    <div className='form-item flex-row'>
      <input type='email' name='email' id='email' className='form-item' placeholder='E-mail *' required />
      <label htmlFor='email' className='form-item'>
        <i className='fa fa-envelope contact' aria-hidden="true"></i>
      </label>
    </div>
    <div className='form-item flex-row'>
      <textarea rows='6' name='message' id='message' className='form-item' placeholder='Message *' required></textarea>
      <label htmlFor='message' className='form-item'>
        <i className='fa fa-pencil contact' aria-hidden="true"></i>
      </label>
    </div>
    <div className='form-item flex-row submit'>
      <div id='recaptcha'></div>
      <input type='submit' id='submit' name='submit' value='S E N D' onSubmit={e => e.preventDefault()} disabled />
    </div>
  </form>
);

export default ContactForm;