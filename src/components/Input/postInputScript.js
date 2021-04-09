import newPostElement from "./postInputScript2";
import {addPost} from '../../Redux/STATE.js';
import {updatePostText} from '../../Redux/STATE.js';
let onAddPost = () => {
    addPost ();
} 




export let onPostChange = () => {
    let text = newPostElement.current.value;
    updatePostText(text);

}


export default onAddPost;