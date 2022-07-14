import React from "react";
import c from './Post.module.css';


export type PostPropsType = {
    message: string;
    likes: number;
    id: number;
}



const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={c.item}>
            <img src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likes}
            </div>
        </div>
    );
}

export default Post;
