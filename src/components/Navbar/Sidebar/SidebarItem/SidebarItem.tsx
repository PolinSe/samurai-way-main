import React from "react";
import {FriendType} from '../../../../redux/state';
import s from "../Sidebar.module.css";

export const SidebarItem: React.FC<FriendType> = (props) => {

    return (
        <div key={props.id} className={s.friend}>
            <img src={props.image} alt={'profile image'}/>
            <span>{props.name}</span>
        </div>
    )
}