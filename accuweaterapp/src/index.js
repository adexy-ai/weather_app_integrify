import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { store } from './store/store';
import './assets/scss/global.scss'

ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
