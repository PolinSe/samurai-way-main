import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../redux/state';

export const DialogItem: React.FC<DialogsType> = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={s.dialog}>
                <img src={props.image} alt={'profile image'}/>
                <span>{props.name}</span>
            </div>
        </NavLink>
    )
}
