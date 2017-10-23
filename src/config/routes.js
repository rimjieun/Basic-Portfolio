import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './../components/MainLayout';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';

const routes = (
  <Router>
    <MainLayout>
      <Route exact path='/' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path ='/contact' component={Contact} />
    </MainLayout>
  </Router>
);

export default routes;