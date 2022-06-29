import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.header_img} src="header.jpeg" alt="birds"/>
            </div>
            <div>
                <img className={s.avatar_img} src="avatar2.jpg" alt="avatar"/>
                description
            </div>
            <MyPosts/>

        </div>
    )
}