

import cd from './ContentDialogues.module.css';
import MessageFriend from './MessageFriend';

let messageData = [
    {id:1, message: 'ААА!!! Мой мозг сейчас просто взорётся нафиг!'},
    {id:2, message: 'Аллах акбар)'},
    {id:3, message: 'Я бы на это посмотрел.'},
    {id:4, message: 'У тебя всё обязательно выйдет, главное не опускай руки.'},
    {id:5, message: 'Мдаа, не удевлюсь если этот взрыв будет самым маленьким взрывом на планет.'}
]


let messageElements = messageData 
    .map ( dialog => <MessageFriend message={dialog.message} id={dialog.id}/> ) ;

const ContentDialogues = () => {
    return (
        <div className={cd.ContentDialogues}>
              { messageElements }
        </div>
    )
}

export default ContentDialogues;