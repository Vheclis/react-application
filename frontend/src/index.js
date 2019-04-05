import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateQuestionPage from './CreateQuestionPage'
import './index.css';

// components
import Home from './Home';

const Refresh = ({ path = '/' }) => (
  <Route
      path={path}
      component={({ history, location, match }) => {
          history.replace({
              ...location,
              pathname:location.pathname.substring(match.path.length)
          });
          return null;
      }}
  />
);


render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/create" component={CreateQuestionPage} />
      <Refresh path="/refresh"/>
    </Switch>
  </Router>
  , document.getElementById('root')
);