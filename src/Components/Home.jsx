import { useEffect , useState } from "react";
import { firestore } from "./config";
import {Link} from 'react-router-dom'


function Home(){
   const[posts,setPosts]=useState([]);
    
   useEffect(()=>{
firestore.collection("Posts").get().then((snapshot)=>{
    const posts=snapshot.docs.map((doc)=>{
        return{
            id:doc.id,
            ...doc.data(),
            
        }
    })
   
    console.log("post",posts);
  return setPosts(posts)
  
})


    },[]);
    
    
    return(
        
        <div className="post-item">
            <h1>Home </h1>
         <div className="blog-by">
                Aswin

            </div>

            {posts.map((post,index)=>(
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
                    <div>{post.subtitle}</div>
                    
                    </div>
            ))}

        </div>
      
    )
}
export default Home;