import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {DialogPropsType} from "./components/Dialogs/DialogsItem/DialogsItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";


export type DialogsTypes = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}

export type MyPostPropsType = {
    posts:  Array<PostPropsType>

}

export type AllPostsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    posts:  Array<PostPropsType>
}



function App (props: AllPostsType)  {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Nav/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}
export default App;
