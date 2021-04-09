import './Content.css';
import Header from './header/header';
import GeneralContent from './GeneralContent';






const Content = (props) => {

    

    return (
        
        <div className='Content'>
            <Header />
            <GeneralContent postData = { props.ProfileState.postData }  addPost={props.addPost} addMessage={props.addMessage} newPostText={props.ProfileState.newPostText}/>
        </div>

        
    )
}



export default Content;



