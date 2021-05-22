import newPostElement from "./postInputScript2";
import Store from '../../Redux/STATE.js';

let onAddPost = () => {
    Store.addPost ();
} 




export let onPostChange = () => {
    let text = newPostElement.current.value;
    Store.updatePostText(text);

}





export default onAddPost;



