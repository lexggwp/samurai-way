import React from 'react';

import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id: number;
    name: string;

}

type MessagePropsType = {
    message: string | number;
    id: number;
}


const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    const dialogs: Array<DialogPropsType> = [{id: 1, name: 'Alexey'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Petr'},
        {id: 5, name: 'Sasha'}];

    const messages: Array<MessagePropsType> = [{id: 1, message: 'How are you?!'},
        {id: 2, message: 'Hi there!'},
        {id: 3, message: 'Glad to see you.'},
        {id: 4, message: 'Petr'},
        {id: 5, message: 'Nice nice nice'}];

    const dialogsElements = dialogs.map((dialog: DialogPropsType) =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );
    const messagesElements = messages
        .map((message) =>
            <Message message={message.message} id={message.id}/>
        );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}


            </div>
        </div>
    );
};

export default Dialogs;