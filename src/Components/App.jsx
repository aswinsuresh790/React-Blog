
import '../App.css';

import { Routes ,Route } from 'react-router-dom';
import {Home,Nabar} from './'
function App() {
  return (
    <div className="App">
   
    <Routes>
    <Route path='/' element={<Home/>} />
   
    <Route path="nav" element={<Nabar/>} />
        
     
     
    </Routes>
      
    </div>
  );
}

export default App;
