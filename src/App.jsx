
import './App.css';
import firebase from 'firebase';
import { firestore} from './Components/config';
import { Routes ,Route } from 'react-router-dom';
import {Nabar,Home,CreatePost} from './Components/index'
 
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" component={Home} >
      </Route>
      <Route path="/nav" component={Nabar} >
        
     
     </Route>
     <Route path="/" component={CreatePost} ></Route>
    </Routes>
      
    </div>
  );
}

export default App;
