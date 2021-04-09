import './PostInput.css';
import React from 'react';
import newPostElement from './postInputScript2';
import {onPostChange} from './postInputScript';

const PostInput = (props) => {

   

    

    return (
        
        <p><input  ref={newPostElement} onChange={onPostChange} value={props.newPostText}  placeholder='Расскажите как прошёл ваш день...' className='PostImput' type='text'></input></p>

        
    )
}

export default PostInput;