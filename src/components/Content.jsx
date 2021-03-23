
import FriendsList from './friends/friends';
import FunctionHuman from './FunctionHuman/FunctionHuman';
import Imgcontetent from './Imgcontent/Imgcontent';
import ImputFunction from './Input/ImputFunction';
import PostInput from './Input/PostInput';
import './Content.css';
import Post from './PostHuman/Post';
import HumanPackInfo from './InfoHumanPack/HumanPackInfo';





const Content = () => {
    return (
        
        <div className='Content'>
            <Imgcontetent />
            
        
            <HumanPackInfo />
            <FunctionHuman />
            <PostInput />
            
            <FriendsList />
            <ImputFunction />
            <Post massage='Ура, скоро будет первый функционал!' like='21' />
            <Post massage='Борьба сквозь сон.' like='14'/>
            <Post />
            <Post />
            
           
            
        
        
        
        </div>

        
    )
}



export default Content;



