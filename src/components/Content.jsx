import AvatarHuman from './AvatarHumann/AvatarHumann';
import FriendsList from './friends/friends';
import FunctionHuman from './FunctionHuman/FunctionHuman';
import Imgcontetent from './Imgcontent/Imgcontent';
import ImputFunction from './Input/ImputFunction';
import InfoHuman from './Profile/InfoHuman';
import NameHuman from './Profile/NameHuman';
import PostInput from './Input/PostInput';
import './Content.css';


const Content = () => {
    return (
        
        <div className='Content'>
            <Imgcontetent />
            <AvatarHuman />
            <NameHuman/>
            <InfoHuman />
            <FunctionHuman />
            <PostInput />
            
            <FriendsList />
            <ImputFunction />
            
        
        
        
        </div>

        
    )
}



export default Content;



