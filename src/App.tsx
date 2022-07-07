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
import {StateType} from "./redux/state";



export type DialogsTypes = {
    dialogs: Array<DialogPropsType>,
    messages: Array<MessagePropsType>
}

export type MyPostPropsType = {
    posts:  Array<PostPropsType>

}

export type AllPageType = {
   state: StateType
}

function App (props: AllPageType)  {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Nav/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage} />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}
export default App;
