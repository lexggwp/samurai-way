import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostPropsType} from "../../App";



type ProfileTypesProps = {
    state: MyPostPropsType
    addPost: () => void;
    updateNewPostText: (newPostText: string) => void;
}

const Profile = (props: ProfileTypesProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     posts={props.state.posts}/>
        </div>
    );
}

export default Profile;
