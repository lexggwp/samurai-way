import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from './Message/Message'
import {DialogsTypes} from "../../App";



const Dialogs = (props: DialogsTypes) => {

    const dialogsElements = props.dialogs.map((dialog) =>
        <DialogsItem name={dialog.name} id={dialog.id}/>
    );
    const messagesElements = props.messages.map((message) =>
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