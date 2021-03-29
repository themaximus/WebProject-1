import './Content.css';
import Header from './header/header';
import GeneralContent from './GeneralContent';





const Content = (props) => {

    

    return (
        
        <div className='Content'>
            <Header />
            <GeneralContent postData = { props.postData } />
        </div>

        
    )
}



export default Content;



