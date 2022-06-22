import React from "react";
import c from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";


const MyPosts = () => {


    let postsData: Array<PostPropsType> = [
        {id: 1, message: 'hey how are you', likes: 25},
        {id: 2, message: 'its my first post', likes: 0 }
    ]

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
                <Post id={postsData[0].id }message={postsData[0].message}  likes={postsData[0].likes} />
                <Post id={postsData[1].id }message={postsData[1].message}  likes={postsData[1].likes} />


            </div>
        </div>

    );
}

export default MyPosts;
