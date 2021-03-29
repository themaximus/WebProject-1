import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messageData = [
  {id:1, message: 'ААА!!! Мой мозг сейчас просто взорётся нафиг!'},
  {id:2, message: 'Аллах акбар)'},
  {id:3, message: 'Я бы на это посмотрел.'},
  {id:4, message: 'У тебя всё обязательно выйдет, главное не опускай руки.'},
  {id:5, message: 'Мдаа, не удевлюсь если этот взрыв будет самым маленьким взрывом на планет.'}
]

let dialoguesData = [
  {id:1, name: 'Максим'},
  {id:2, name: 'Женя'},
  {id:3, name: 'Кирилл'},
  {id:4, name: 'Валя'},
  {id:5, name: 'Ксюша'}
]

let postData = [
  {id: 1, message: 'Слушайте русскую женщину!', likesCount: 32},
  {id: 2, message: 'Какой сегодня прекрасный день!', likesCount: 54},
  {id: 3, message: 'Происходят удивительные вещи!', likesCount: 22}
]

ReactDOM.render(
  <React.StrictMode>
    <App messageData={ messageData }  postData={ postData } dialoguesData={ dialoguesData }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

