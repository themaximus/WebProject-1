
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';

import Dialogues from './components/Dialogues/Dialogues';





const App = () => {
  return (
    <BrowserRouter> 
    <div className='App'>
      
      
      <div>
        <Route path='/Content' component={Content} />
        <Route path='/Dialogues' component={Dialogues} />
      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
