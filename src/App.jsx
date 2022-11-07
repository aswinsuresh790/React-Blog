
import './App.css';
import firebase from 'firebase';
import { firestore} from './Components/config';
import { Routes ,Route } from 'react-router-dom';
import {Nabar,Home} from './Components/index'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" component={Home} >
      </Route>
      <Route path="/" component={Nabar} >
        
     
     </Route>
    </Routes>
      
    </div>
  );
}

export default App;
