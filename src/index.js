import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Template from './Template';
import ExamplePage1 from './Page1';
import ExamplePage2 from './Page2';
import Login from './Login';

ReactDOM.render(
  <Router>
    <div>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <Template>
          <Route exact path="/page1" component={ExamplePage1}/>
          <Route exact path="/page2" component={ExamplePage2}/>
      </Template>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
