
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
        <Route path='/Content' render={ () => <Content State={ 
          
          props.appState.Profile } 
          
          />} />

        <Route path='/Dialogues' render={ () => <Dialogues State={ 
          
          props.appState.Dialogues }
        
        />} />

      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
