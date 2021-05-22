import newMessageElement from "./DialoguesInputScript2";
import Store from '../../Redux/STATE.js';

let onAddMessage = () => {
    let text = newMessageElement.current.value;
    Store.addMessage (text);

} 

export let onMessageChange = () => {
    let text = newMessageElement.current.value;
    Store.addMessage (text);
}

export default onAddMessage;


