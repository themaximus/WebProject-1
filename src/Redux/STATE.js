
import React from "react"


  let Store = {
    _State: {

   

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
          
          {id: 2, message: 'Какой сегодня прекрасный день!', likesCount: 54},
          {id: 3, message: 'Происходят удивительные вещи!', likesCount: 22}
        ] ,
  
        newPostText: 'АНАЛ'
      
  
      } ,
      
      
    },

    getState() {
      return this._State;
    },

    rerenderEntireTree () {
      console.log('State Changed');
    },

    addPost () {
      let newPost = {
        id: 4,
        message: this._State.Profile.newPostText,
        likesCount: 0
     }
     
  
     this._State.Profile.postData.push(newPost);
     this._State.Profile.newPostText = '';
     this._State.rerenderEntireTree(this._State);
    },

    addMessage (messageMessage) {
      let newMessage = {
        id: 6,
        message: messageMessage 
      };
  
      this._State.Dialogues.messageData.push(newMessage);
      this._State.Profile.newPostText = '';
      this._State.rerenderEntireTree (this._State);
       
    },

    updateMessageText (text) {
    
      this._State.Dialogues.messageData = text;
      this._State.rerenderEntireTree(this._State);
      
       
    },

    updatePostText (text) {
    
      this._State.Profile.newPostText = text;
      this._State.rerenderEntireTree(this._State);
      
       
    },

   

    subscribe (observer) {
      this._State.rerenderEntireTree = observer;
    }

  }

  

  

  

 

 
    
 

  

  
  window.State = Store;
  export default Store;