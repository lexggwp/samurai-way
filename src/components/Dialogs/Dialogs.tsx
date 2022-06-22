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

    let dialogsData: Array<DialogPropsType> = [{id: 1, name: 'Alexey'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Petr'},
        {id: 5, name: 'Sasha'}];

    let messageData: Array<MessagePropsType> = [{id: 1, message: 'How are you?!'},
        {id: 2, message: 'Hi there!'},
        {id: 3, message: 'Glad to see you.'},
        {id: 4, message: 'Petr'},
        {id: 5, message: 'Nice nice nice'}];


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[4].id}/>


            </div>
        </div>
    );
};

export default Dialogs;