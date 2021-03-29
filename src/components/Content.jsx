import './Content.css';
import Header from './header/header';
import GeneralContent from './GeneralContent';





const Content = (props) => {

    

    return (
        
        <div className='Content'>
            <Header />
            <GeneralContent postData = { props.State.postData } />
        </div>

        
    )
}



export default Content;



