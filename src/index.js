import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mobile.css'
// import reportWebVitals from './reportWebVitals';
import App from './App'
import  {BrowserRouter} from  'react-browser-router'
ReactDOM.render(
  <BrowserRouter>
  
  <App/>
  
  </BrowserRouter>
 
  ,document.getElementById('root')
);
