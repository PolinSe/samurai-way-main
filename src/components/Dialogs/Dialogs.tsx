import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {StoreType} from '../../redux/state';
import {addMessageAC, changeNewMessageTextAC} from '../../redux/dialogsReducer';


type DialogsPropsType = {
    store: StoreType
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)


    const addMessage = () => {
        props.store.dispatch(addMessageAC())

    }
    const addMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.store.dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea value={state.newMessageElement} onChange={addMessageText}
                              placeholder={'Enter your message'}></textarea>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}