'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/send', (req, res) => {
  // console.log('send route: ', req.body);
  const output = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Message: ${req.body.message}</li>
    </ul>
  `;
  nodemailer.createTestAccount((err, account) => {

    if (err) {
      console.error('Failed to create a testing account. ' + err.message);
      return process.exit(1);
    }

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: 'My Portfolio <' + process.env.USER + '>',
      to: process.env.EMAIL,
      subject: 'Portfolio Contact Request',
      text: 'Hello world?',
      html: output
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.redirect('/contact');
    });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => console.log('Connected to server. Go to http://localhost:%s.', PORT));