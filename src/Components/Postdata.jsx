import { useState } from "react"
import { useEffect } from "react"
import { firestore } from "./config"
import { useParams } from "react-router-dom"
function PostData(){

    const[posts,setPosts]=useState({})
    const {postId}=useParams();

    useEffect(()=>{
        firestore.collection("Posts").doc(postId).get().then((snapshot)=>{
            setPosts(snapshot.data())
        })
    })



    return(
        <div className="post-detaills">
            <h1>{posts.title}</h1>
            <br />
            <h5>{posts.content}</h5>
        </div>
    )



}
export default PostData