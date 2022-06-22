import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/0d/af/be/panorama-of-ocean.jpg?w=700&h=500&s=1" alt=""/>
            </div>
            <div>
                ava + descrp
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
