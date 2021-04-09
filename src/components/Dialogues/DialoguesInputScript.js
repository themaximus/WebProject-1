import newMessageElement from "./DialoguesInputScript2";
import {addMessage} from '../../Redux/STATE.js';

let onAddPost = () => {
    let text = newMessageElement.current.value;
    addMessage (text);

} 

export let onMessageChange = () => {
    let text = newMessageElement.current.value;
    addMessage (text);
}

export default onAddPost;