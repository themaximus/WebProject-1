import c from './GeneralContent.module.css';

import FriendsList from "./friends/friends"
import FunctionHuman from "./FunctionHuman/FunctionHuman"
import Imgcontetent from "./Imgcontent/Imgcontent"
import HumanPackInfo from "./InfoHumanPack/HumanPackInfo"
import ImputFunction from "./Input/ImputFunction"
import PostInput from "./Input/PostInput"
import Post from "./PostHuman/Post"



const GeneralContent = () => {
    return (
        <div className={c.GeneralContent}>
            <Imgcontetent />
            
        
            <HumanPackInfo />
            <FunctionHuman />
            <PostInput />
            
            <FriendsList />
            <ImputFunction />
            <Post massage='Ура, скоро будет первый функционал!' like='21' />
            <Post massage='Борьба сквозь сон.' like='14'/>
            <Post />
        </div>
    )
}


export default GeneralContent;