import './index.css';
import state, {subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, StateType, updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App updateNewPostText={updateNewPostText} addPost={addPost} state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);