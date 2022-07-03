import React from "react";
import s from './Dialogs.module.css'
import {BrowserRouter, NavLink, Route} from 'react-router-dom';



type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

// type DialogsType = {}


const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Dmitry'} id={1}/>
                <DialogItem name={'Andrey'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Valera'} id={5}/>
                <DialogItem name={'Viktor'} id={6}/>
            </div>

            <div className={s.messages}>
                <Message message={'Hello1...'}/>
                <Message message={'Hello2...'}/>
                <Message message={'Hello3...'}/>
                <Message message={'Yo...'}/>
                <Message message={'Yoyo...'}/>
            </div>
        </div>

    )
}