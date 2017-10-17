import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true
    }
    this.captchaClick = this.captchaClick.bind(this);
  }

  captchaClick(asdf) {
    console.log(asdf);
    this.setState({disabled: false});
  }

  render() {

    return (
      <form className='flex-col contact' action='/send' method='POST'>
        <h1 className='contact'>Want to work on a project together?<br />Send me a message!</h1>
        <div className='form-item flex-row'>
          <label htmlFor='name' className='form-item'>
            <i className="fa fa-user-circle-o contact" aria-hidden="true"></i>
          </label>
          <input type='text' name='name' id='name' className='form-item' placeholder='Name'/>
        </div>
        <div className='form-item flex-row'>
          <label htmlFor='email' className='form-item'>
            <i className="fa fa-envelope contact" aria-hidden="true"></i>
          </label>
          <input type='email' name='email' id='email' className='form-item' placeholder='E-mail' />
        </div>
        <div className='form-item flex-row'>
          <label htmlFor='message' className='form-item'>
            <i className="fa fa-pencil contact" aria-hidden="true"></i>
          </label>
          <textarea rows='6' name='message' id='message' className='form-item' placeholder='Message'></textarea>
        </div>
        <div className='form-item flex-row submit'>
          <div className="g-recaptcha" data-sitekey="6LduwTQUAAAAAEZCA6QbbpQJmltA77oxElfo2k2R" data-callback={(asdf) => this.captchaClick(asdf)}></div>
          <input type='submit' id='submit' value='S E N D' onSubmit={e => e.preventDefault()} disabled={this.state.disabled} />
        </div>
      </form>
    );
  }
}
export default ContactForm;