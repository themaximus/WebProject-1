

import cd from './ContentDialogues.module.css';
import MessageFriend from './MessageFriend';







const ContentDialogues = (props) => {

    

    let messageElements = props.messageData.map ( dialog => <MessageFriend message={dialog.message} id={dialog.id}/> ) ;

    return (
        <div className={cd.ContentDialogues}>
              { messageElements }
        </div>
    )
}

export default ContentDialogues;