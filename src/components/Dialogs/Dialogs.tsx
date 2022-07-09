import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

export const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}