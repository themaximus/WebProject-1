
import React from "react"




  let rerenderEntireTree = () => {
    console.log('State Changed');
  }

  let State ={

   

    Dialogues: {

    dialoguesData: [
        {id:1, name: 'Максим'},
        {id:2, name: 'Женя'},
        {id:3, name: 'Кирилл'},
        {id:4, name: 'Валя'},
        {id:5, name: 'Ксюша'}
      ] ,

    messageData: [
        {id:1, message: 'ААА!!! Мой мозг сейчас просто взорётся нафиг!'},
        {id:2, message: 'Аллах акбар)'},
        {id:3, message: 'Я бы на это посмотрел.'},
        {id:4, message: 'У тебя всё обязательно выйдет, главное не опускай руки.'},
        {id:5, message: 'Мдаа, не удевлюсь если этот взрыв будет самым маленьким взрывом на планет.'},
        {id:6, message: 'лоооооол'}
      ] } ,


      Profile: {

    

    postData: [
        {id: 1, message: 'Слушайте русскую женщину!', likesCount: 32},
        {id: 2, message: 'Какой сегодня прекрасный день!', likesCount: 54},
        {id: 3, message: 'Происходят удивительные вещи!', likesCount: 22}
      ] ,

      newPostText: 'АНАЛ'
    

    } ,
    
    
  }

  window.State = State;

  export const addMessage = (messageMessage) => {
    let newMessage = {
      id: 6,
      message: messageMessage 
    };

    State.Dialogues.messageData.push(newMessage);
    rerenderEntireTree(State);
     
  }

  export const addPost = () => {
    let newPost = {
      id: 4,
      message: State.Profile.newPostText,
      likesCount: 0
   };
   

    State.Profile.postData.push(newPost);
    State.Profile.newPostText = '';
    rerenderEntireTree(State);
  } 
    
  export const updatePostText = (text) => {
    
    State.Profile.newPostText = text;
    rerenderEntireTree(State);
    
     
  }

  export const subscribe = (observer) => {
    rerenderEntireTree = observer;
  }

  

  export default State;