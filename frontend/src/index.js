import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateQuestionPage from './pages/CreateQuestionPage'
import UpdateQuestionpage from './pages/UpdateQuestionPage'
import './index.css'
import Navbar from './components/SiteNavBar'

import Home from './pages/HomePage';

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