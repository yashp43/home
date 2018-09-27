import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Aboutme from './Aboutme';
import Resume from './Resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
