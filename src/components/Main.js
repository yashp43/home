import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
