import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (messageText: string) => void
    changeNewMessageText: (messageText: string) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)


    const addMessage = () => {
        props.addMessage(props.dialogsPage.newMessageElement)
    }
    const addMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea value={props.dialogsPage.newMessageElement} onChange={addMessageText}></textarea>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>

        </div>
    )
}