import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/main.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "./assets/vendor/animate/animate.css"
import "./assets/vendor/css-hamburgers/hamburgers.min.css"
import "./assets/vendor/select2/select2.min.css"
import './assets/boxicons-2.0.7/css/boxicons.min.css';

import Layout from './compoments/Layout/Layout'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
