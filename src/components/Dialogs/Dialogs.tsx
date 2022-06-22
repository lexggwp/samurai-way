import React from 'react';

import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id: number;
    name: string;

}

type MessagePropsType = {
    message: string | number;
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
               <DialogItem name={'Alexey'} id={1} />
               <DialogItem name={'Sasha'} id={2} />
               <DialogItem name={'Dima'} id={3} />
               <DialogItem name={'Petr'} id={4} />
               <DialogItem name={'Nikolai'} id={5} />
               <DialogItem name={'Oleg'} id={6} />

            </div>
            <div className={s.messages}>
                <Message message={'Hi there!'}/>
                <Message message={'How are you?!'}/>
                <Message message={'Glad to see you.'}/>
                <Message message={'Nice nice nice'}/>


            </div>
        </div>
    );
};

export default Dialogs;