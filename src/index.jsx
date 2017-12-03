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
import {Router, Route ,IndexRoute, browserHistory, Switch} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import AddEmployee from './container/AddEmployee'

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history = {history}>
      <Route path = "/" component = {App}>
      <Route path = "/add_employee" component = {AddEmployee}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('react-root'))
