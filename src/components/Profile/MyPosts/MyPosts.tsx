import React from "react";
import c from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    addPost: () => void;
    posts: Array<PostPropsType>
    newPostText: string;
    updateNewPostText: (text: string) => void;

}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((post) => <Post id={post.id} message={post.message} likes={post.likes}/>)


    const addPost = () => {
        props.addPost();

    }
    const newTextChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return (
        <div className={c.post__block}>
            my posts
            <div>
                <textarea onChange={newTextChangeHandler} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {postsElements}


            </div>
        </div>

    );
}

export default MyPosts;
