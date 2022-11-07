
import '../App.css';

import { Routes ,Route } from 'react-router-dom';
import {Home,Nabar,CreatePost} from './index'
function App() {
  return (
    <div className="App">
   
    <Routes>
    <Route path='/' element={<Home/>}/>
   
    <Route path="nav" element={<Nabar/>}/>
    <Route path="createpost" element={<CreatePost/>} ></Route>
        
     
     
    </Routes>
      
    </div>
  );
}

export default App;
