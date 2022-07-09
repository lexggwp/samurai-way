import React from "react";
import c from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

type testMyPostsPropsType = {
    addPost: (postMessage: string) => void;
    posts: Array<PostPropsType>

}

function MyPosts (props: testMyPostsPropsType) {

    let postsElements = props.posts.map( (post) => <Post id={post.id} message={post.message} likes={post.likes}/>)
    let newPostElement = React.useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }
    return (
        <div className={c.post__block}>
            my posts
            <div>
                <textarea ref={newPostElement}></textarea>
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
