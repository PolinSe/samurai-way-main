import React from "react";
import s from './Sidebar.module.css'
import {SidebarType} from '../../../redux/state';
import {SidebarItem} from './SidebarItem/SidebarItem';

export const Sidebar: React.FC<SidebarType> = (props) => {

    let sidebarElements = props.friends.map(e => <SidebarItem id={e.id} name={e.name} image={e.image}/>)

    return (
        <div className={s.sidebar}>
            <h2>Friends</h2>
            <div className={s.friends}>
                {sidebarElements}
            </div>
        </div>
    )
}