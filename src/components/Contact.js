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
      active: {
        name: false,
        email: false,
        message: false
      },
      field: {
        name: '',
        email: '',
        message: ''
      },
      response: ''
    };
    this.activateField = this.activateField.bind(this);
    this.updateField = this.updateField.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadRecaptcha();
  }

  loadRecaptcha() {
    grecaptcha.render('recaptcha', {
      sitekey: '6LduwTQUAAAAAEZCA6QbbpQJmltA77oxElfo2k2R',
      callback: recaptchaCallback
    });
  };

  activateField(e) {
    if (e.target.name === 'name') {
      this.setState({
        active: {
          name: true,
          email: false,
          message: false
        }
      });
    } else if (e.target.name === 'email') {
      this.setState({
        active: {
          name: false,
          email: true,
          message: false
        }
      });
    } else if (e.target.name === 'message') {
      this.setState({
        active: {
          name: false,
          email: false,
          message: true
        }
      });
    }
  }

  updateField(e) {
    this.setState({
      field: {
        [e.target.name]: e.target.value
      }
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   if (this.state.field.name !== '' && this.state.field.email !== '' && this.state.field.message !== '') {
  //     document.getElementById('submit').removeAttribute('disabled');
  //   } else {
  //     this.setState({
  //       response: '* Please fill in all fields.'
  //     })
  //   }
  // }

  render() {
    return (
      <div className='container flex-row contact'>
        <ContactForm active={this.state.active} activateField={this.activateField} updateField={this.updateField} />
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