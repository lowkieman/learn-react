/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

const myFirstElement = <h1>Hello React!</h1>
const mySecondElement= <p>This is a paragraph</p>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement,mySecondElement);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(mySecondElement);

/*
You are now watching
the React file 'index.js'
through our 'Show React' tool.
*/
