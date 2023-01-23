import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './component/Header';

import history from './services/history';
import store from './store';


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Header/>
          <Routes/>
        </Router>
      </Provider>
    </div>
  );
}


