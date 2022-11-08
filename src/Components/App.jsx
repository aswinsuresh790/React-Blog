
import '../App.css';

import { Routes ,Route } from 'react-router-dom';
import {Home,Nabar,CreatePost,PostData} from './index'
import { Nav } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
   <Nabar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path="post/:postId" element={<PostData/>}></Route>
    <Route path="nav" element={<Nabar/>}/>
    <Route path="createpost" element={<CreatePost/>} ></Route>
        
     
     
    </Routes>
      
    </div>
  );
}

export default App;
