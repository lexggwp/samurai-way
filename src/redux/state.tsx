import {DialogsTypes, MyPostPropsType} from '../App'

let rerenderEntireTree = (state: StateType) => {
}

export type StateType = {
    profilePage: MyPostPropsType,
    messagesPage: DialogsTypes
}

 type PostMessagePropsType = {
    id: number,
    message: string,
    likes: number
 }

export let addPost = () => {
    let newPost: PostMessagePropsType  = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;

    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}



let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'hey how are you', likes: 25},
            {id: 2, message: 'its my first post', likes: 0},
            {id: 3, message: 'its my firDFGSDGFDSGst post', likes: 0},
            {id: 4, message: 'its my fiDSGSDGSGSGrst po st', likes: 0}
        ],
        newPostText: '',

    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Alexey'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Petr'},
            {id: 5, name: 'Sasha'}],
        messages: [
            {id: 1, message: 'How are you?!'},
            {id: 2, message: 'Hi there!'},
            {id: 3, message: 'Glad to see you.'},
            {id: 4, message: 'Petr'},
            {id: 5, message: 'Nice nice nice'}]
    }
}

export default state;
