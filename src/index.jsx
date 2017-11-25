// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import Login from './container/login/index.js'
import {Provider} from 'react-redux'
import store from './store'
import {Router, Route ,IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

const history = syncHistoryWithStore(createBrowserHistory(), store);

render((
  <Provider store={store}>
      <Router history = {history}>
      <div>
      <Route path = "/login" component = {Login}/>
      <Route path = "/" component = {App}/>
      </div>
    </Router>
  </Provider>
), document.getElementById('react-root'))
