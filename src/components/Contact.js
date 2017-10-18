import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import SocialIcon from './components/SocialIcon';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      icons: [
        {
          id: 1,
          label: 'github.com/rimjieun',
          classes: 'fa fa-github-alt',
          url: 'https://github.com/rimjieun'
        },
        {
          id: 2,
          label: 'linkedin.com/in/rimjieun',
          classes: 'fa fa-linkedin-square',
          url: 'https://linkedin.com/in/rimjieun'
        },
        {
          id: 3,
          label: 'instagram.com/yakuccino',
          classes: 'fa fa-instagram',
          url: 'https://instagram.com/yakuccino'
        }
      ],
      disabled: true
    };
  }

  componentDidMount() {
    this.loadRecaptcha();
  }

  loadRecaptcha() {
    console.log('react onload')
    grecaptcha.render('recaptcha', {
      sitekey: '6LduwTQUAAAAAEZCA6QbbpQJmltA77oxElfo2k2R',
      callback: recaptchaCallback
    });
  };

  render() {
    return (
      <div className='container flex-row contact'>
        <ContactForm />
        <div className='social-icons'>
          {this.state.icons.map(icon => {
            return <SocialIcon key={icon.id} label={icon.label} classes={icon.classes} url={icon.url} />
          })}
        </div>
      </div>
    );
  }
}

export default Contact;