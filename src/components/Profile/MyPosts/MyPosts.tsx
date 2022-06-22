import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    const msg1: string = 'hey how are you';
    const msg2: string = 'its my first post';

    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={c.posts}>
                <Post message={msg1} likes={0}/>
                <Post message={msg2} likes={20}/>


            </div>
        </div>

    );
}

export default MyPosts;
