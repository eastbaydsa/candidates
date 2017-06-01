import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToSectionWithRouter from './shared/ScrollToSection';
import './index.css';
require('smoothscroll-polyfill').polyfill();

ReactDOM.render(
  <Router>
    <ScrollToSectionWithRouter>
      <App/>
    </ScrollToSectionWithRouter>
  </Router>,
  document.getElementById('root')
);
