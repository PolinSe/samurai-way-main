import React from "react";
import s from "./Post.module.css"
import {MessageType} from '../../../../redux/state';

export const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <img src="ava.jpeg" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likes}
            </div>
        </div>
    )
}