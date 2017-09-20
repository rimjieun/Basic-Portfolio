import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Main from './../components/Main';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={About} />
      <Route path='/projects' component={Projects} />
      <Route path ='/contact' component={Contact} />
    </Route>
  </Router>
);

export default routes;