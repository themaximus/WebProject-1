import c from './GeneralContent.module.css';

import FriendsList from "./friends/friends"
import FunctionHuman from "./FunctionHuman/FunctionHuman"
import Imgcontetent from "./Imgcontent/Imgcontent"
import HumanPackInfo from "./InfoHumanPack/HumanPackInfo"
import ImputFunction from "./Input/ImputFunction"
import PostInput from "./Input/PostInput"
import Post from "./PostHuman/Post"

let postData = [
    {id: 1, message: 'Слушайте русскую женщину!', likesCount: 32},
    {id: 2, message: 'Какой сегодня прекрасный день!', likesCount: 54},
    {id: 3, message: 'Происходят удивительные вещи!', likesCount: 22},
]


let PostElements = postData.map ( p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/> ) ;


const GeneralContent = () => {
    return (
        <div className={c.GeneralContent}>
            <Imgcontetent />
            
        
            <HumanPackInfo />
            <FunctionHuman />
            <PostInput />
            
            <FriendsList />
            <ImputFunction />
            { PostElements }
        </div>
    )
}


export default GeneralContent;