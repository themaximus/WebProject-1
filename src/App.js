
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Dialogues from './components/Dialogues/Dialogues';







const App = (props) => {

  
  

  return (
    <BrowserRouter> 
    <div className='App'>
      
      
      <div>
        <Route path='/Content' render={ () => <Content postData={ props.postData } />} />
        <Route path='/Dialogues' render={ () => <Dialogues messageData={ props.messageData } />} />
      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
