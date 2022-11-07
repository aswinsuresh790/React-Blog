import {useState} from "react";
import { firestore } from "./config";
function CreatePost(){  
const[title,setTitle]=useState()
const[subtitle,setSubtitle]=useState()
const[content,setContent]=useState()
function handleSubmit(e){
    e.preventDefault();
console.log("Title",title);
console.log("Subtitle",subtitle);
console.log("Content",content);

firestore.collection("Posts").add({
    title,
    subtitle,
    content,
    createAt:new Date() 
}
)

}   

return(

    <form onSubmit={handleSubmit}>
        <div className="titleofpage">
<h1>Create Post</h1>
        </div>
<div className="form-field">
<label >
    Title</label>
    <div><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
    </div>
    </div>
    <div className="form-field">
<label >
    SubTitle </label>
    <div>
    <input type="text" value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} />
    </div>
    </div>
    <div className="form-field">
<label >
    Content 
    </label>
    <div>
     <textarea vlaue={content} onChange={(e)=>
        setContent(e.target.value)
    }>
        
        


    </textarea>
    </div>
    </div>
    <div className="button-submit">
        <button className="create-post">Create-Post</button>
    </div>

</form>


)

}
export default CreatePost;