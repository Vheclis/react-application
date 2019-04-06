import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateQuestionPage from './CreateQuestionPage'
import UpdateQuestionpage from './UpdateQuestionPage'
import './index.css'
import Navbar from './SiteNavBar'

import Home from './Home';

render(
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateQuestionPage} />
        <Route path="/update" component={UpdateQuestionpage} />
      </Switch>
    </Router>
  </div>
  , document.getElementById('root')
);