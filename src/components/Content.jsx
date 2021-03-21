import AvatarHuman from './AvatarHumann';
import FriendsList from './friends';
import FunctionHuman from './FunctionHuman';
import Imgcontetent from './Imgcontent';
import ImputFunction from './ImputFunction';
import InfoHuman from './InfoHuman';
import NameHuman from './NameHuman';
import PostInput from './PostInput';


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



