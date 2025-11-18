import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
// [1] Bootstrap CSS Library installed via npm
import 'bootstrap/dist/css/bootstrap.min.css';
// [2] Bootstrap Popper installed via npm
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
