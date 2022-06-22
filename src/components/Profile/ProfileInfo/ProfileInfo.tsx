import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/0d/af/be/panorama-of-ocean.jpg?w=700&h=500&s=1"
                    alt=""/>
            </div>
            <div className={c.description}>
                ava + descrp
            </div>
        </div>
    );
};

export default ProfileInfo;