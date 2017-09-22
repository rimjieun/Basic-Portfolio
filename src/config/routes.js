import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './../components/Main';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';

const routes = (
  <Router>
    <Main>
      <Route exact path='/' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path ='/contact' component={Contact} />
    </Main>
  </Router>
);

export default routes;