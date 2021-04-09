import c from './GeneralContent.module.css';

import FriendsList from "./friends/friends"
import FunctionHuman from "./FunctionHuman/FunctionHuman"
import Imgcontetent from "./Imgcontent/Imgcontent"
import HumanPackInfo from "./InfoHumanPack/HumanPackInfo"
import ImputFunction from "./Input/ImputFunction"
import PostInput from "./Input/PostInput"
import Post from "./PostHuman/Post"
import React from 'react';











const GeneralContent = (props) => {

    let PostElements = props.postData.map ( p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/> ) ;

    

    return (
        <div className={c.GeneralContent}>
            <Imgcontetent />
            
        
            <HumanPackInfo />
            <FunctionHuman />
            <PostInput newPostText={props.newPostText}  />
            
            <FriendsList />
            <ImputFunction />
            { PostElements }
        </div>
    )
}


export default GeneralContent;