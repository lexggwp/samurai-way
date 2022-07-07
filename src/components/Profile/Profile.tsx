import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostPropsType} from "../../App";


type ProfileType = {
    state: MyPostPropsType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;
