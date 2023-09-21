import { useEffect, useState } from "react"
import Post from "./post";

export default function Posts(){
    const [Posts, statePosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => statePosts(data))
    },[])
    return (
        <div>
            <h3>Posts: {Posts.length}</h3>
            {
                Posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}