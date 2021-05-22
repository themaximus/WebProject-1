import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/STATE.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App appState={Store.getState()} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}



rerenderEntireTree(Store.getState());

Store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

