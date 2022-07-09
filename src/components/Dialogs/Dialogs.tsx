import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from './Message/Message'
import {DialogsTypes} from "../../App";


type DialogsTypeProps = {
    state: DialogsTypes
}



const Dialogs = (props: DialogsTypeProps) => {

    const dialogsElements = props.state.dialogs.map((dialog) =>
        <DialogsItem name={dialog.name} id={dialog.id}/>
    );
    const messagesElements = props.state.messages.map((message) =>
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