
import { firestore } from "./config";
import Hooks from "../Hooks";
function CreatePost(){  
const title=Hooks('')
const subtitle=Hooks('')
const content=Hooks('')
function handleSubmit(e){
    e.preventDefault();
console.log("Title",title);
console.log("Subtitle",subtitle);
console.log("Content",content);

firestore.collection("Posts").add({
    title:title.value,
    subtitle:subtitle.value,
    content:content.value,
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
    <div><input type="text" {...title} />
    </div>
    </div>
    <div className="form-field">
<label >
    SubTitle </label>
    <div>
    <input type="text" {...subtitle} />
    </div>
    </div>
    <div className="form-field">
<label >
    Content 
    </label>
    <div>
     <textarea {...content}
    >
        
        


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