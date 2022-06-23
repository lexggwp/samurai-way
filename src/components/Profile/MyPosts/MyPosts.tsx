import React from "react";
import c from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";


const MyPosts = () => {


    let posts: Array<PostPropsType> = [
        {id: 1, message: 'hey how are you', likes: 25},
        {id: 2, message: 'its my first post', likes: 0}
    ]
    let postsElements = posts.map((post) => <Post id={post.id} message={post.message} likes={post.likes}/>)

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
