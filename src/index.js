import './index.css';
import reportWebVitals from './reportWebVitals';
import State, { subscribe } from './Redux/STATE.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





let rerenderEntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App appState={State} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}



rerenderEntireTree(State);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

