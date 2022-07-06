import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostPropsType} from "../../../App";


function MyPosts (props: MyPostPropsType) {

    let postsElements = props.posts.map( (post) => <Post id={post.id} message={post.message} likes={post.likes}/>)

    return (
        <div className={c.post__block}>
            my posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                {postsElements}


            </div>
        </div>

    );
}

export default MyPosts;
