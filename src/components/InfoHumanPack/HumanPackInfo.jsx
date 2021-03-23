import AvatarHuman from "./AvatarHumann"
import InfoHuman from "./InfoHuman"
import NameHuman from "./NameHuman";
import './HumanPackInfo.css';


const HumanPackInfo = () => {
   return (
        <div className='HumanPackInfo'>
            <AvatarHuman />
            <NameHuman />
            <InfoHuman />
        </div>
    )
}

export default HumanPackInfo;