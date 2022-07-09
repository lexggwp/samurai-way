import React from "react";
// import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostPropsType} from "../../App";


type ProfileTypesProps = {
    state: MyPostPropsType
    addPost: (postMessage: string) => void;
}

const Profile = (props: ProfileTypesProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.state.posts}/>
        </div>
    );
}

export default Profile;
