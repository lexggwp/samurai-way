import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

export let rerenderEntiretree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}