import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


export type DialogPropsType = {
    id: number;
    name: string;

}

function DialogsItem (props: DialogPropsType) {

            return (
            <div className={s.dialog}>
                <NavLink to={"/dialogs/"  + props.id}>{props.name}</NavLink>
            </div>
            )
};

export default DialogsItem;