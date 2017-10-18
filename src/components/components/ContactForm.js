import React, { Component } from 'react';

const ContactForm = props => (
  <form className='flex-col contact' id='contact-form' action='/send' method='POST'>
    <h1 className='contact'>Want to work on a project together?<br />Send me a message!</h1>
    <p className='form-response'></p>
    <div className='form-item flex-row'>
      <label htmlFor='name' className='form-item'>
        <i className={props.active.name ? 'fa fa-user-circle-o contact selected' : 'fa fa-user-circle-o contact'} aria-hidden="true"></i>
      </label>
      <input type='text' name='name' id='name' className={props.active.name ? 'form-item selected' : 'form-item'} placeholder='Name *' onClick={props.activateField} onChange={props.updateField} />
    </div>
    <div className='form-item flex-row'>
      <label htmlFor='email' className='form-item'>
        <i className={props.active.email ? 'fa fa-envelope contact selected' : 'fa fa-envelope contact'} aria-hidden="true"></i>
      </label>
      <input type='email' name='email' id='email' className={props.active.email ? 'form-item selected' : 'form-item'} placeholder='E-mail *' onClick={props.activateField} />
    </div>
    <div className='form-item flex-row'>
      <label htmlFor='message' className='form-item'>
        <i className={props.active.message ? 'fa fa-pencil contact selected' : 'fa fa-pencil contact'} aria-hidden="true"></i>
      </label>
      <textarea rows='6' name='message' id='message' className={props.active.message ? 'form-item selected' : 'form-item'} placeholder='Message *' onClick={props.activateField}></textarea>
    </div>
    <div className='form-item flex-row submit'>
      <div id='recaptcha'></div>
      <input type='submit' id='submit' value='S E N D' onSubmit={props.handleSubmit} disabled />
    </div>
  </form>
);

export default ContactForm;