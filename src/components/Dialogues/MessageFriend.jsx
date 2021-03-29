



import uy from './MessageFriend.module.css';


const MessageFriend = (props) => {
    return (
        
        <div className={uy.MessageFriend}>
              {props.message}
        </div>
    )
}


export default MessageFriend;